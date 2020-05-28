import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';
import TweetTop from 'tweet-top';

class App extends React.Component {
  render() {
    let tweetitems = tweets.tweets.map(tweet => {
      return <Tweet tweet={tweet}/>;
    });

    return (
      <div className="tweets">
        {tweetitems}
      </div>
    );
  }
}

class Tweet extends React.Component {
  blepUrl(textStr, urlObj) {
    let inArr = textStr.split(urlObj.url);
    let outArr = [];
    let urlthing = ( <a href={urlObj.url}>{urlObj.display_url}</a> );
    for (let i = 0; i < inArr.length - 1; i++) {
      outArr.push(inArr[i]);
      outArr.push(urlthing);
    }
    return outArr;
  }

  render() {
    let tweet = this.props.tweet;
    let entities = tweet.entities;
    let textContent = tweet.text;
    let mediaList = entities.media || [];
    for (let mediaObj of mediaList) {
      textContent = textContent.replace(mediaObj.url, "");
    }

    let content = [textContent];
    for (let urlObj of entities.urls) {
      content = content.map(ele => {
        if (typeof ele === "string") {
          return this.blepUrl(ele, urlObj);
        } else {
          return ele;
        }
      });
      content = content.flat();
    }

    let mediaElements = mediaList.map(mediaObj => {
      return <img src={mediaObj.media_url}/>;
    });

    return (
      <div className="singletweet">
        <TweetTop
          name={tweet.user.name}
          handle={tweet.user.screen_name}
          timestamp={tweet.created_at}
        />
        <p>{content}</p>
        <div class="embedimg">
          {mediaElements}
        </div>
      </div>
    );
  }
}

const element = document.getElementById('app');
ReactDOM.render(<App />, element );//
console.log("tweet react");
