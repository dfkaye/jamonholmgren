import React from "react";
import Page from "../components/page";
import Link from "../components/link";

export default () => {
  const imgWidth = "600";
  return (
    <Page title="Building My Home Garage Gym">
      <h1>Building My Home Garage Gym</h1>

      <img width={imgWidth} alt="My home gym" src="/static/gym/gym-wide.jpg" />
      <img width={imgWidth} alt="My home gym" src="/static/gym/gym-tall.jpg" />
      <img
        width={imgWidth}
        alt="My home gym"
        src="/static/gym/gym-closeup.jpg"
      />
      <img width={imgWidth} alt="My home gym" src="/static/gym/gym-jamon.jpg" />

      <h2 id="components">Gym Components</h2>
      <p>
        Here's a list of everything I've bought for my gym, total $2,977 plus
        tax. I actually got some of the dumbbells at garage sales and probably
        spent about $2700 total including tax. Figuring $50/month each for my
        wife and me to have gym memberships, this will pay for itself in a
        little over 2 years.
      </p>
      <ul>
        <li>
          <strong>Wall Rack: </strong>
          <a href="https://www.roguefitness.com/rogue-rml-3w-fold-back-wall-mount-rack">
            Rogue RML-3W Fold Back Wall Mount Rack
          </a>{" "}
          ($495)
        </li>
        <li>
          <strong>Bar and Bumper Plates: </strong>
          <a href="https://www.roguefitness.com/alpha-bar-bumper-set">
            Alpha Bar & Bumper Set
          </a>{" "}
          ($795)
        </li>
        <li>
          <strong>Extra Plates: </strong>
          <a href="https://www.amazon.com/gp/product/B01B262O54/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01B262O54&linkCode=as2&tag=jamonholmgren-20&linkId=5d22977b93cfb36fdee693a89c3babc7">
            CAP Barbell plates (10, 5, and 2.5 lb pairs)
          </a>{" "}
          ($75)
        </li>
        <li>
          <strong>Bench: </strong>
          <a href="https://www.amazon.com/gp/product/B002QJZAE4/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B002QJZAE4&linkId=b2e17dbfae255d56ae98a8ba9eff2eb2">
            Universal UB300 Adjustable Bench
          </a>{" "}
          ($77)
        </li>
        <li>
          <strong>Rubber Mats: </strong>
          <a href="https://www.amazon.com/gp/product/B00B4IHXRU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00B4IHXRU&linkCode=as2&tag=jamonholmgren-20&linkId=20505017ada681eb37ccea7412ccc3a4">
            ProSource fs-1908-pzzl Puzzle Exercise Mat EVA Foam Interlocking
            Tiles - 10 count (240 SF)
          </a>{" "}
          ($210)
        </li>
        <li>
          <strong>Dumbbell Storage: </strong>
          <a href="https://www.amazon.com/gp/product/B00XHD9BHA/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00XHD9BHA&linkCode=as2&tag=jamonholmgren-20&linkId=f69e7ea13eecae3527558a286526b3d0">
            Marcy Combo Weights Storage Rack for Dumbbells, Kettlebells, and
            Weight Plates DBR-0117
          </a>{" "}
          ($75)
        </li>
        <li>
          <strong>Bumper Plate Storage: </strong>
          <a href="https://www.amazon.com/gp/product/B073XB7H39/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073XB7H39&linkId=d2a5e1ad7b57cc0bcf86adc7a0c20f7f">
            (2) Titan Wall Mounted 4-Peg Olympic Bumper Plate Weight Rack
            Storage
          </a>{" "}
          ($110)
        </li>
        <li>
          <strong>Dumbbells: </strong>
          <a href="https://www.amazon.com/gp/product/B0145B3H90/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0145B3H90&linkCode=as2&tag=jamonholmgren-20&linkId=39c6488c1851fb8b8b7f76292990277d">
            CAP Barbell Cast Iron Hex Dumbbell (12, 15, 20, 25, 40 lb pairs)
          </a>{" "}
          ($300)
        </li>
        <li>
          <strong>Adjustable Dumbbells: </strong>
          <a href="https://www.amazon.com/gp/product/B00RSDOU2G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00RSDOU2G&linkCode=as2&tag=jamonholmgren-20&linkId=488fe6e131c677af52fbd4e9cf18403b">
            Dumbbells 2 X 52.5 LBS Adjustable Cast Iron Set. Total 105 Lbs
          </a>{" "}
          ($100)
        </li>
        <li>
          <strong>Adjustable Dumbbells: </strong>
          <a href="https://www.amazon.com/gp/product/B00G7RHGNY/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00G7RHGNY&linkId=4fa9218fb20a4fa63457844c2402ca45">
            PowerBlock Elite Set Dumbell, 50-Pound (pair)
          </a>{" "}
          ($272)
        </li>
        <li>
          <strong>Light Dumbbells: </strong>
          <a href="https://www.amazon.com/gp/product/B00B4RVYPS/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00B4RVYPS&linkId=eb9f829bd753cbde5e4de60c3b32179b">
            j/fit Dumbbells Sets For Gyms, Pilates, MMA, Training (3, 5, 8 lb
            pairs)
          </a>{" "}
          ($43)
        </li>
        <li>
          <strong>Resistance Bands: </strong>
          <a href="https://www.amazon.com/gp/product/B01MR4WG1R/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01MR4WG1R&linkId=30aa1a9516b523511b330d7021dc56cc">
            WACOOL Resistance Bands - 12 Piece Set Includes Exercise Tubes, Door
            Anchor, Foam Handles, Ankle Straps, Carry Bag - Weights Exercise,
            Fitness Workout, P90X - Stackable Up to 105 lbs
          </a>{" "}
          ($15)
        </li>
        <li>
          <strong>Rowing Machine: </strong>
          <a href="https://www.amazon.com/gp/product/B017HSNIEW/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B017HSNIEW&linkId=c7987d3ee7e4d2a616dcae98bce7b2b4">
            Sunny Health & Fitness Magnetic Rowing Machine with LCD Monitor by
            SF-RW5515
          </a>{" "}
          ($210)
        </li>
        <li>
          <strong>Mirrors: </strong>
          <a href="https://www.homedepot.com/p/Glacier-Bay-36-in-W-x-60-in-L-Polished-Edge-Bath-Mirror-81178/205513132">
            (3) 36 in. W x 60 in. L Polished Edge Bath Mirrors
          </a>{" "}
          ($150)
        </li>
        <li>Portable shelves with wheels ($15)</li>
        <li>Baskets for towels, bands ($5)</li>
        <li>Exercise towels ($10)</li>
        <li>iPad/iPhone stand ($5)</li>
        <li>Yoga mats ($15)</li>
      </ul>

      <h3 id="background">Background</h3>

      <p>
        In November of 2016 I started working out with Ryan Linton. I was 30 lbs
        overweight and starting to feel my age. I knew if I didn't do something
        soon, I was going to have a body that would hurt for a long time.
      </p>

      <p>
        In mid-2018, once my home was restored
        <Link
          spaces
          href="https://twitter.com/jamonholmgren/status/945465737874829317"
        >
          from the arson that happened 5 months prior,
        </Link>
        I started thinking about building an in-home gym. After all, I have a
        three-car garage and plenty of room, and while I was doing well getting
        to the gym two to three times per week, I knew I would do better if the
        gym was in my house.
      </p>

      <p>
        I started by doing a bunch of research and ordered the parts. Here's
        what I have so far and what I am planning to do next.
      </p>

      <h2 id="reviews">Component Reviews</h2>

      <h3 id="rack">
        <a href="https://www.roguefitness.com/rogue-rml-3w-fold-back-wall-mount-rack">
          Rogue RML-3W Fold Back Wall Mount Rack
        </a>
      </h3>

      <p>When it comes to lifting, don't scrimp on the bar or the rack.</p>

      <p>
        The RML-3W wall rack has been awesome. I do recommend getting the metal
        stringers to mount to the wall. It took me and my 13 year old son an
        hour or so to install and is rock-solid. It's mounted to a wall with 2x6
        studs and the lag bolts hold it very securely. The garage floor slopes a
        bit left-to-right which means I did slide a little 1.25lb weight under
        one side to level out the rack, but I don't notice the 1/2" difference
        side-to-side. There's also a super simple adjustment in the way it's
        engineered that lets it sit on the floor no matter what.
      </p>

      <img
        width={imgWidth}
        src="https://user-images.githubusercontent.com/1479215/50796330-075d8d80-1286-11e9-9e0c-e68c96f51de3.jpg"
        alt="Rogue RML-3W Fold Back Wall Mount Rack"
      />

      <p>
        When folded against the wall, it takes up very little room. I don't
        however fold it up very often -- there really isn't any point, since
        there's plenty of room to do everything we need to do, and we don't park
        in that garage bay. It takes about 2 minutes to fold up or unfold. The
        J-hooks are solid and it feels pro. I'm 6'-4" and the pull-up bar is
        high enough (especially considering I don't have much more ceiling
        height to work with).
      </p>

      <h3 id="bar">
        <a href="https://www.roguefitness.com/alpha-bar-bumper-set">
          Alpha Bar & Bumper Set
        </a>
      </h3>

      <p>
        The Alpha set includes the{" "}
        <a href="https://www.roguefitness.com/rogue-ohio-power-bar">
          Rogue Ohio Bar (20kg/44lbs)
        </a>{" "}
        in Black Zinc/Bright Zinc. I absolutely love this bar. It's somewhat
        flexible so it feels "alive" and yet has the strength to easily load on
        400 lbs, which is the most I've put on it. It's also 28.5mm in diameter
        (1 1/8”) which is somewhat smaller and feels very good in the hand. It
        works great for deadlift, squats (front and back), bench, overhead
        press, and everything else I've tried it with.
      </p>

      <img
        width={imgWidth}
        src="https://user-images.githubusercontent.com/1479215/50796329-075d8d80-1286-11e9-8b24-aa99e52d6dee.jpg"
      />

      <p>
        The bumper set is great because it includes four 45 lb bumper plates,
        two 35s, two 25s, and two 10s. Bumper plates are fantastic, if you
        haven't tried them yet. I will only buy bumper plates for the majority
        of my bar weight. It also comes with V3 Monster Lite J-Cups (j-hooks)
        and a pair of Rogue Spring Collars.
      </p>

      <img
        alt="The Rogue Ohio Bar"
        width={imgWidth}
        src="https://user-images.githubusercontent.com/1479215/50813439-3813e600-12cb-11e9-8ffe-940ae568ff1b.jpg"
      />

      <p>
        I also bought an extra set of 10s, 5s, and 2.5s from Amazon to round out
        the set. I recommend{" "}
        <a href="https://www.amazon.com/gp/product/B01B262O54/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01B262O54&linkCode=as2&tag=jamonholmgren-20&linkId=5d22977b93cfb36fdee693a89c3babc7">
          this set of CAP Barbell plates
        </a>{" "}
        from Amazon.
      </p>

      <h3 id="bench">
        <a href="https://www.amazon.com/gp/product/B002QJZAE4/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B002QJZAE4&linkId=b2e17dbfae255d56ae98a8ba9eff2eb2">
          Universal UB300 Adjustable Bench
        </a>
      </h3>

      <p>
        This bench isn't fancy but it is sturdy and does the job and the price
        is right. The only thing I don't like about it is that doing face-down
        incline movements is tough.
      </p>

      <h3 id="mat">
        <a href="https://www.amazon.com/gp/product/B00B4IHXRU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00B4IHXRU&linkCode=as2&tag=jamonholmgren-20&linkId=20505017ada681eb37ccea7412ccc3a4">
          ProSource fs-1908-pzzl Puzzle Exercise Mat EVA Foam Interlocking Tiles
          - 10 count (240 SF)
        </a>
      </h3>

      <p>
        This set of interlocking rubber mats was perfectly sized for my gym. It
        was so easy to put together that my kids did it. They feel good on my
        feet and withstand the bumper plates being dropped without a problem.
      </p>

      <img
        width={imgWidth}
        alt="My kids putting in the rubber mats"
        src="https://user-images.githubusercontent.com/1479215/50813967-dd7b8980-12cc-11e9-9d00-4ea642483c60.jpg"
      />

      <h3 id="rack-storage">
        <a href="https://www.amazon.com/gp/product/B073XB7H39/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073XB7H39&linkId=d2a5e1ad7b57cc0bcf86adc7a0c20f7f">
          (2) Titan Wall Mounted 4-Peg Olympic Bumper Plate Weight Rack Storage
        </a>
      </h3>

      <p>
        I haven't gotten around to mounting these yet (I'm waiting until I get
        time to also get the mirrors listed at the end of this), but they seem
        sturdy enough. They're from Titan, which is a lower-cost alternative to
        Rogue. For wall storage, I figure the cheaper option is fine (I wouldn't
        buy a Titan wall rack though).
      </p>

      <h3 id="dumbbell-storage">
        <a href="https://www.amazon.com/gp/product/B00XHD9BHA/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00XHD9BHA&linkCode=as2&tag=jamonholmgren-20&linkId=f69e7ea13eecae3527558a286526b3d0">
          Marcy Combo Weights Storage Rack for Dumbbells, Kettlebells, and
          Weight Plates DBR-0117
        </a>
      </h3>

      <p>
        To store all the dumbbells and a few of the barbells, we bought this
        weight storage rack. It does the job and is strong enough.
      </p>

      <img
        width={imgWidth}
        alt="Dumbbell rack"
        src="https://user-images.githubusercontent.com/1479215/50796326-06c4f700-1286-11e9-8e66-4447920a5de5.jpg"
      />

      <h3 id="dumbbells-cap">
        <a href="https://www.amazon.com/gp/product/B0145B3H90/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0145B3H90&linkCode=as2&tag=jamonholmgren-20&linkId=39c6488c1851fb8b8b7f76292990277d">
          CAP Cast Iron Hex Dumbbells
        </a>
      </h3>

      <p>
        These CAP hex dumbbells are convenient and rugged. I bought 12, 15, 20,
        25, and 40 lb pairs, mostly from garage sales, but you can see them on
        Amazon at the link. I would recommend getting 10, 12, 15, 20, 25, 30,
        35, 40, 45, and 50 lbs if you have the budget. They're my go-to
        dumbbells. For the in-between weights, I use the adjustable weights
        (next 2 items).
      </p>

      <h3 id="dumbbells-adjustable">
        <a href="https://www.amazon.com/gp/product/B00RSDOU2G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00RSDOU2G&linkCode=as2&tag=jamonholmgren-20&linkId=488fe6e131c677af52fbd4e9cf18403b">
          Dumbbells 2 X 52.5 LBS Adjustable Cast Iron Set. Total 105 Lbs ($100)
        </a>
      </h3>

      <p>
        These dumbbells aren't my favorite. I actually have two sets, since I
        bought one set from my brother. They sit mostly unused on the weight
        rack now that I have the other dumbbells (see below). I would only
        recommend buying them if you're on a tight budget but need a really wide
        and flexible range of weight. They're a pain to adjust and frequently
        come loose. They also tend to clink together when doing overhead press,
        because the bars are super long. But I have also put a lot of heavy reps
        up with them, so they will do the job.
      </p>

      <h3 id="dumbbells-powerblock">
        <a href="https://www.amazon.com/gp/product/B00G7RHGNY/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00G7RHGNY&linkId=4fa9218fb20a4fa63457844c2402ca45">
          PowerBlock Elite Set Dumbell, 50-Pound (pair)
        </a>
      </h3>

      <p>
        These awkward-looking things are actually very pleasant to use. Unlike
        the other adjustable dumbbells, they're very quick to change to a
        different weight. You can adjust in 2.5 lb adjustments and go from 5 lbs
        to 50 lbs. (It for some reason doesn't include a setting for 12.5 lbs,
        though.) They're not hard on your hands and feel comfortable.
      </p>

      <h3 id="dumbbells-light">
        <a href="https://www.amazon.com/gp/product/B00B4RVYPS/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00B4RVYPS&linkId=eb9f829bd753cbde5e4de60c3b32179b">
          j/fit Dumbbells Sets For Gyms, Pilates, MMA, Training (3, 5, 8 lb
          pairs)
        </a>
      </h3>

      <p>
        These small dumbbells are used more by my wife, but come in handy for
        things like Lu Raises.
      </p>

      <h3 id="bands">
        <a href="https://www.amazon.com/gp/product/B01MR4WG1R/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01MR4WG1R&linkId=30aa1a9516b523511b330d7021dc56cc">
          WACOOL Resistance Bands - 12 Piece Set Includes Exercise Tubes, Door
          Anchor, Foam Handles, Ankle Straps, Carry Bag - Weights Exercise,
          Fitness Workout, P90X - Stackable Up to 105 lbs
        </a>
      </h3>

      <p>
        These bands are okay, but feel light to me. They're fine for face pulls.
        I wish they had a little more resistence.
      </p>

      <h3 id="rowing-machine">
        <a href="https://www.amazon.com/gp/product/B017HSNIEW/ref=as_li_tl?ie=UTF8&tag=jamonholmgren-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B017HSNIEW&linkId=c7987d3ee7e4d2a616dcae98bce7b2b4">
          Sunny Health & Fitness Magnetic Rowing Machine with LCD Monitor by
          SF-RW5515
        </a>
      </h3>

      <p>
        This rowing machine is okay, but I don't use it all that often. It feels
        a bit cheap and has broken in small but annoying ways already. If you
        have a bigger budget you might consider a higher quality one. I'm not
        sure rowing is for me. I do hockey for cardio now.
      </p>

      <img
        alt="Rowing machine"
        width={imgWidth}
        src="https://user-images.githubusercontent.com/1479215/50815926-c7bd9280-12d3-11e9-8da3-8a6013b1b5e9.jpg"
      />

      <h3 id="mirrors">
        <a href="https://www.homedepot.com/p/Glacier-Bay-36-in-W-x-60-in-L-Polished-Edge-Bath-Mirror-81178/205513132">
          (3) 36 in. W x 60 in. L Polished Edge Bath Mirrors
        </a>
      </h3>

      <p>
        These are perfect for my gym! They're rugged and although there is a
        little bit of distortion it's hardly noticeable. For the price, I
        highly, highly recommend them.
      </p>

      <h3 id="other">Other items</h3>

      <ul>
        <li>Portable shelves with wheels</li>
        <li>Baskets for towels, bands</li>
        <li>Exercise towels</li>
        <li>iPad/iPhone stand</li>
        <li>Electric space heater (winter)</li>
        <li>Electric fan (summer)</li>
        <li>Yoga mats</li>
      </ul>

      <h3 id="strong">BONUS: Strong Fitness App Workout Routines</h3>

      <p>
        I've made or acquired a few Strong Fitness routines that I really love.
        Click each link to download the routine to your phone.
      </p>

      <ul>
        <li>
          <a href="https://strong.app.link/mjHp7VSZgT">
            Jamon's Full Body Workout
          </a>
        </li>
        <li>
          <a href="https://strong.app.link/10lqya8WiT">
            Leon's Delt and Bicep Workout
          </a>
        </li>
        <li>
          <a href="https://strong.app.link/VEJDrZ5WiT">Upper Body Thrash</a>
        </li>
        <li>
          <a href="https://strong.app.link/rokltLqXiT">Lower Body Thrash</a>
        </li>
        <li>
          <a href="https://strong.app.link/AK2IBT9WiT">Ethier Upper 1</a>
        </li>
        <li>
          <a href="https://strong.app.link/uEWE2zcXiT">Ethier Upper 2</a>
        </li>
      </ul>

      <p>
        <em>
          Note that some of the product links are affiliate links. I don't
          endorse them for the affiliate money, which more or less just helps
          pay for hosting my website, but rather because I use these products
          every week in my gym and like them.
        </em>
      </p>
    </Page>
  );
};
