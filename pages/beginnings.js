import React from 'react'
import Link from 'next/link'
import Page from '../components/page'

export default () => {
  return (
    <Page title='Beginnings'>
      <h1>Beginnings</h1>
      <img src='/static/jamonholmgren.jpg' alt='Portrait photo of Jamon Holmgren, quite handsome, or so my wife tells me' id='jamon' />
      <p>
        I grew up just outside a small town in northwest Oregon, called Clatskanie. My dad was a millwright and eventually started his own small excavation business, and my mom took care of me and my eight siblings. Yes, you read that right -- I have eight awesome siblings! Three sisters and five brothers. And no, we're not Mormon nor Catholic -- we're Lutherans, actually.
      </p>
      <p>
        My childhood was really idyllic in a lot of ways. My parents bought a foreclosed home on a VA loan (my dad served in the US Army just after Vietnam). The house was situated on about eight acres and was bordered by vast swathes of uninhabited timberland. I spent my younger years exploring the woods with my dog and, later, some of my younger brothers.
      </p>
      <img src='/static/dad-jamon-fish.jpg' id='dad-jamon-fish' />
      <figcaption>My dad and me after a fishing trip</figcaption>
      <p>
        In the early 90s, my dad bought his first computer to do his small business books. I had already started to play around with the Apple IIes and Commodore 64 at my grade school, so this new 286 was of intense interest to me.
      </p>
      <img src='/static/old-286-computer.png' id='first-286-computer' />
      <figcaption>My dad's first computer, a 286. I hooked it up to an LCD screen a few years ago and it still worked!</figcaption>
      <p>
        Unfortunately for me, the 286 didn't come with any programming tools. Undeterred, I dug into batch files, reading the source code and trying to puzzle out what they did. I even tried to manipulate the machine code of a compiled exe file. Unfortunately, I learned the benefit of making a good backup before doing that -- I permanently damaged a game and never did get it working again after that.
      </p>
      <img src='/static/jamon-drew-at-computer.jpg' id='jamon-drew-at-computer' />
      <figcaption>My brother Drew (right) and I playing Chuck Yeager's Air Combat on the 286</figcaption>
      <p>
        My dad's plans to make the 286 do all of his books quickly and easily didn't quite pan out, so he eventually went back and bought a more capable computer -- one that could handle QuickBooks. This 486 SLC computer came with QBasic! I was thrilled. From age twelve through my teenage years, I built hundreds of games, some small and some larger. I built text adventure games, top-down tank shooters, space games, a huge <a href='http://kingdomofkroz.com/'>Kingdom of Kroz</a> knockoff called Rokz, and many others. Unfortunately, almost all of those games have long since been lost.
      </p>
      <p>
        Besides computer programming and computer games, I loved to read. I read a lot of sci-fi and fantasy, including the Wheel of Time series, and a lot of World War II nonfiction, especially about airplanes and submarines. I'd ride the bus into town with my long legs folded against the seat in front of me, engrossed in yet another library book.
      </p>
      <p>
        I played varsity basketball in high school. I was 6'-4" and somewhat athletic, so the coach convinced me to try out for the team despite me being a complete noobie on the court. Within a few months I was hooked. I still love to play basketball, although the opportunities are fewer and further between.
      </p>
      <img src='/static/my-siblings-and-parents.jpg' alt='My parents and 8 siblings, along with their spouses' id='family' />
      <figcaption>My parents and 8 siblings, along with their spouses</figcaption>
      <p>
        After high school, I tried out for a local community college basketball team and practiced with them up until I was cut just before their first game. I finished out the semester and then moved to Vancouver, Washington state, dropping out of college.
      </p>
      <p>
        My first jobs were pretty menial labor. Changing tires and oil at a local tire shop, packing lumber for a house framing crew. Over time, I started taking on side jobs using my computer programming skills -- usually building something in MS Excel or Access, using Visual Basic for Applications. I think I charged $15/hour for those projects. For a 19 year old at the time, I thought it was fair enough, and I got to code and get paid for it.
      </p>
      <p>
        In 2002, I started working for a home builder (the same one that built both of my homes, <Link href='http://www.newtraditionhomes.com'>New Tradition Homes</Link>). I did CAD design and marketing for them for a few years.
      </p>
      <p>
        My wife Chyra and I got married during that time and had our first of four children, Cedric.
      </p>
      <img src='/static/jamon-chyra-honeymoon.jpg' alt='My wife Chyra and me on our honeymoon' id='honeymoon' />
      <figcaption>My wife Chyra and me on our honeymoon. We're going on 14 years now!</figcaption>
      <p>
        In August of 2005, I bought JavaScript, PHP, and MySQL books, and decided to start my own business, <Link href='https://clearsightstudio.com'>ClearSight</Link>, designing and programming small business websites.
      </p>
      <p>
        Running my own business was really eye-opening to me. When I started, I literally went from office park to office park, handing out business cards to whoever would listen to me. I got a few contracts that way and developed some sales skills that have helped me a lot. I also had to learn PHP, databases, and user experience design. Luckily, expectations were low!
      </p>
      <img src='/static/desk-setup.jpg' alt='My desk setup in those days' id='family' />
      <figcaption>My desk setup in those days</figcaption>
      <p>
        I was "working remotely" and didn't even know the term at the time. I loved it!
      </p>
      <p>
        After a few years, I started feeling like I needed some help. I eventually hired a few people including a junior developer, Kevin VanGelder, who is still with my company to this day. Over the next several years, I grew the business from just me to a dozen, including a project manager, design department, and many developers to share the load. We went from small business websites to larger web applications and native mobile apps.
      </p>
      <p>
        In late 2015, I felt like I had pushed ClearSight as far as I could go, and was running up against some of my own limitations. Todd Werth and I had become good friends and we were working together on several open source projects. After a lot of discussion between us and also involving Ken Miller, Todd's business partner, we merged our two companies and created the design and development agency <Link href='https://infinite.red'>Infinite Red</Link>.
      </p>
      <p>
         That brings us to today. My role is Chief Operating Officer as well as co-CTO. I manage a portion of our projects as well as sales and developing partnerships and relationships with other businesses.
      </p>
      <img src='/static/jamon-family.jpg' alt='My family' id='jamon-family' />
      <figcaption>My family - my wife Chyra, Cedric, Cally, Vanna, and Vessa</figcaption>
      <p className='next-steps'>
        <em>
          <Link href='/now' prefetch>Read more about what I'm doing now</Link>
        </em>
        &bull;
        <em>
          <Link href='/tech' prefetch>Check out the tech I'm currently working in or exploring</Link>
        </em>
        &bull;
        <em>
          <Link href='/archive' prefetch>Archive of old blog posts I've kept around</Link>
        </em>
      </p>
      <style jsx>{`
        img {
          display: block;
          margin: 10px auto;
        }
        figcaption {
          display: block;
          margin: 10px auto;
          text-align: center;
          max-width: 500px;
          font-weight: 200;
          font-style: italic;
        }
        .next-steps {
          text-align: center;
        }
        .next-steps em {
          display: inline-block;
          padding: 4px;
        }
      `}</style>
    </Page>
  )
}

// I grew up in a small town in northwest Oregon. In the early 90s, my dad got a computer, and I started programming in QBasic shortly afterward. From age twelve through my teenage years, I built hundreds of games, some small and some larger. I also played varsity basketball in high school and read a lot.

// I went to a single semester of community college and then quit. I moved to Vancouver, WA with my parents and siblings and still live in that area today.

// I was working for a home builder (the same one that built both of my houses, New Tradition Homes) and in charge of their website. Eventually, I decided to start my own business (ClearSight) doing small business websites myself, in August of 2005. Fast-forward a few years and I started hiring developers to work with me, and eventually built the business to around a dozen.
