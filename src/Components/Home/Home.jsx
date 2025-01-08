import React from 'react'
import './home.scss'
import sansiro from '../../Assets/home/sansiro.png'
import curvasud1 from '../../Assets/home/curvasud1.png'
import curvasud from '../../Assets/home/curvasud.jpg'
import scudetto from '../../Assets/home/scudetto.jpg'
import champions from '../../Assets/home/champions.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-wrapper">
                <img src={sansiro} alt="" />
                <p> <span>The FIFA World Cup 2030 </span>is set to be a landmark tournament, as it marks the centennial 
                    celebration of the inaugural World Cup held in 1930. While the host countries have not 
                    yet been finalized, there is significant interest from various nations in South America,
                     Europe, and possibly North Africa and the Middle East. This World Cup will not only showcase 
                     the best international football teams but also aims to highlight the sport's global reach and
                      growth, with plans for innovative fan engagement and sustainability initiatives. As the host
                      nation are determined, anticipation 
                    will build around how the tournament will honor its rich history while looking to the future of 
                    football..</p>
            </div>
            <div className="home-wrapper1">
                <img src={curvasud1} alt="" />
                <p>
                    <span> Morocco</span> to co-host the 2026 FIFA World Cup alongside the United 
                    States and Canada. However, as of October 2023, there has been no formal announcement regarding 
                    Morocco's specific role in the 2030 World Cup, though the nation has expressed interest in bidding 
                    for the tournament. Morocco's previous successful hosting of international 
                    events and its vibrant football culture position it as a potential candidate for future tournaments.
                </p>
            </div>
            <div className="home-wrapper">
                <img src={scudetto} alt="" />
                <p><span> Morocco</span> has 
                been actively investing in infrastructure improvements in preparation for the FIFA World Cup 2030,
                 which they are co-hosting with Spain and Portugal. Key developments include the expansion and 
                 modernization of transport networks, such as the enhancement of highways and rail connections, 
                 and significant upgrades to stadiums and sporting facilities. Additionally, urban infrastructure 
                 in cities like Casablanca, Marrakech, and Rabat is being improved to accommodate the influx of
                  visitors, with initiatives
                 focusing on public transportation, hospitality, and urban services to ensure a successful tournament.</p>

            </div>
            <div className="home-wrapper1">
                <p>
                    <span> Morocco made a historic</span> run in the 2022 FIFA World Cup, becoming 
                    the first African nation to reach the semifinals of the tournament. They topped their group, which 
                    included Croatia, Belgium, and Canada, before defeating Spain in the Round of 16 and Portugal in 
                    the quarterfinals. Their remarkable performance captured global attention and showcased their 
                    strong defensive play and passionate fan support, ultimately finishing in 
                    fourth place after losing to France in the semifinals and falling to Croatia in the third-place match.</p>
                <img src={champions} alt="" />
            </div>
            <div className="home-wrapper">
                <img src={curvasud} alt="" />
                    <p> <span>The 2030 FIFA World Cup,</span> is set to be a landmark tournament,
                     as it marks the centennial celebration of the inaugural World Cup held in 1930. While the host 
                     countries have not yet been finalized, there is significant interest from various nations in South 
                     America, Europe, and possibly North Africa and the Middle East. This World Cup will not only 
                     showcase the best international football teams but also aims to highlight the sport's global reach
                      and growth, with plans for innovative fan engagement and sustainability initiatives. As the host 
                      nation are determined, anticipation will 
                    build around how the tournament will honor its rich history while looking to the future of football.</p>
            </div>
        </div>
    )
}

export default Home