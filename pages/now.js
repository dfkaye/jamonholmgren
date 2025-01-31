import React from "react";
import Page from "../components/page";
import Link from "next/link";
// import YouTube from "react-youtube";
import TweetEmbed from "react-tweet-embed";

export default () => {
  return (
    <Page title="What I am doing now">
      <h1>What I'm doing now</h1>

      <p>
        <em>Last updated September 17, 2019. 🎃</em>
      </p>

      <p>
        <em>
          (Inspired by Derek Sivers' <a href="http://sivers.org/now">post</a>,
          here's what I'm currently up to.)
        </em>
      </p>

      <p>
        My family had a{" "}
        <a href="https://twitter.com/jamonholmgren/status/945465737874829317">
          huge, life-altering event
        </a>{" "}
        happen on Christmas Eve, 2017. We returned home to find our house
        burglarized and on fire. We are thankful everyone is safe and that law
        enforcement caught the suspects. We're now back in our house and settled
        back in.
      </p>

      <p>
        While this has been a topsy-turvy event in our lives, life does go on.
        Here's what I'm up to:
      </p>

      <ul>
        <li>
          I started playing ice hockey again for the first time in 15 years!{" "}
          <TweetEmbed id={"1174483867559809025"} />
        </li>
        <li>
          Traveling a lot for work!{" "}
          <a href="/talks">Check out my latest conference talks.</a>
        </li>
        <li>
          Swimming in our new pool and enjoying our new{" "}
          <a href="/pool-deck">Custom Pool Deck</a>
        </li>
        <li>Our family has a cat, Willow, who is two years old.</li>
        <li>
          I'm continuing to work out in my <Link href="/gym">new home gym</Link>
          .
        </li>
        <li>
          <Link href="/tech">
            <a>Playing with some new languages and frameworks</a>
          </Link>
        </li>
      </ul>

      <p>
        <img
          width="468"
          alt="derek sivers tweet"
          src="https://cloud.githubusercontent.com/assets/1479215/19919313/1452e898-a08f-11e6-9e7c-3fc212129f29.png"
        />
      </p>
    </Page>
  );
};
