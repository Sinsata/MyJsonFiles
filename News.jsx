import React, { useState } from 'react'
import './news.css'
import myNews from './newsApi.json'

const News = () => {

  // var newLenght = myNews.length;
  var k = myNews.length, kx = k - 6, k1=0, k2, k3, k4;
  var xxx2, xxx;
  if(kx<0) {
    kx=0;
  }
  
  const lastNews6 = []
  for(var i = k - 1; i >= kx; i--) {
    k1++
    lastNews6[k1] = myNews[i];
  }

  function lastNews() {
    k1=0;
    for(var i = k - 1; i >= kx; i--) {
      k1++
      lastNews6[k1] = myNews[i];
    }
    setSortNew(lastNews6);
  }

  const medDevelopmentNews6 = []
  function medDevelopmentNews() {
    k2=0;
    for(var i = k - 1; i >= kx; i--) {
      k2++;
      xxx2 = JSON.stringify(myNews[i].type)
      xxx = xxx2.includes('"tibbiyot_rivoji":true')
      if(xxx) {
        medDevelopmentNews6[k2] = myNews[i];
      }
    }
    setSortNew(medDevelopmentNews6);
  }

  const medEducationNews6 = []
  function medEducationNews() {
    k3=0;
    for(var i = k - 1; i >= kx; i--) {
      k3++;
      xxx2 = JSON.stringify(myNews[i].type)
      xxx = xxx2.includes('"tibbiy_talim":true')
      if(xxx) {
        medEducationNews6[k3] = myNews[i];
      }
    }
    setSortNew(medEducationNews6);
  }

  const widenNews6 = []
  function widenNews() {
    k4=0;
    for(var i = k - 1; i >= kx; i--) {
      k4++;
      xxx2 = JSON.stringify(myNews[i].type)
      xxx = xxx2.includes('"emlash":true')
      if(xxx) {
        widenNews6[k4] = myNews[i];
      }
    }
    setSortNew(widenNews6);
  }

  const [sortNew, setSortNew] = useState(lastNews6);

  return (
    <>
    <section className="news">
      <div className="container">
        <h2>Yangiliklar</h2>

        <div className="nav">
          <input type="checkbox" id='navCheckNews' className='d-none'/>
          <label className='navCheckClosser2' for="navCheckNews"></label>
          <label className='menu__news' for="navCheckNews">
            <span className='show-nav'><i class="fa-solid fa-bars-staggered"></i></span> {/* = */}
            <span className='close-nav'><i class="fa-solid fa-xmark"></i></span> {/* x */}
          </label>
          <ul className='nav__items'>
            <li className='nav__item'><a onClick={lastNews}>So'nggi yangiliklar</a></li>
            <li className='nav__item'><a onClick={medDevelopmentNews}>Tibbiyot rivoji</a></li>
            <li className='nav__item'><a onClick={medEducationNews}>Tibbiy ta'lim</a></li>
            <li className='nav__item'><a onClick={widenNews}>Emlash</a></li>
            <li className='nav__item'><a onClick={lastNews}>Barchasi</a></li>
          </ul>
        </div>

        {/* NEW BLOGS */}
        <div className="blogs">
          {sortNew.map((post) => (
            <a href='#' className="blog" key={post.id}>
              <div className="blog__image">
                <img src={post.image}/>
              </div>
              <div className="blog__date">
                <div>{post.date}</div>
                <div>{post.time}</div>
              </div>
              <div className="blog__title">{post.title}</div>
              <div className="blog__text">{post.body}</div>
              <div className="blog__creator">{post.creator}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default News