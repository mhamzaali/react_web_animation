import React, { useRef, useEffect } from 'react';
import './App.css';
// import useWebAnimations from "@wellyshen/use-web-animations";


function App() {
  const firstBackground = useRef(null);
  const secondBackground = useRef(null);
  const firstForeground = useRef(null);
  const secondForeground = useRef(null);
  const aliceAnimation = useRef(null);
  const Runningman = useRef(null);
 

  useEffect(() => {
    var sceneryFrames = [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
    ];

    var sceneryTimingBackground = {
      duration: 36000,
      iterations: Infinity,
    }

    var sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity,
    };

    const spriteFrames = [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" }
    ]

    const firstBackgroundMovement = firstBackground.current.animate(sceneryFrames, sceneryTimingBackground);
    firstBackgroundMovement.currentTime = firstBackgroundMovement.effect.getTiming().duration / 2;

    const secondBackgroundMovement = secondBackground.current.animate(sceneryFrames, sceneryTimingBackground);

    const firstForegroundMovement = firstForeground.current.animate(sceneryFrames, sceneryTimingForeground);
    firstForegroundMovement.currentTime = firstForegroundMovement.effect.getTiming().duration / 2;

    const secondForegroundMovement = secondForeground.current.animate(sceneryFrames, sceneryTimingForeground);

    const aliceAnimationMovement = aliceAnimation.current.animate(spriteFrames, {
      easing: 'steps(7,end)',
      direction: 'reverse',
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    });



    var scenes = [firstForegroundMovement, secondForegroundMovement, firstBackgroundMovement, secondBackgroundMovement];

    const adjustPlaybackRate = () => {
      if(aliceAnimationMovement.playbackRate < .8) {
        scenes.forEach((animation) => {
          animation.playbackRate = aliceAnimationMovement.playbackRate/2*-1;

        })
      } else if(aliceAnimationMovement.playbackRate > 1.2){
        scenes.forEach((animation) => {
          animation.playbackRate = aliceAnimationMovement.playbackRate/2;

        })
      } else {
        scenes.forEach((animation) => {
          animation.playbackRate = 0;

        })
      }
    }


    const goFaster = () => {
      aliceAnimationMovement.playbackRate *= 1.5;
      adjustPlaybackRate();
    }
   
    window.addEventListener("click", goFaster);
  })
  return (
    <div className="wrapper">
      
      <div className="sky">
        <img id="click" src="https://www.hallerandhug.com/wp-content/uploads/2016/04/clickhere.png"  alt="click here"/>
      </div>
      <div className="earth">
      <p id="name">By Hamza Ali</p>
        <div id="red-queen_and_alice">
          <img id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." ref={aliceAnimation} />        
        </div>
        <div id="man">
          <img id="man_gif" src="https://media.giphy.com/media/3b8HhOe2LhftPxEdPq/giphy.gif"  alt="man" ref={Runningman}/>
        </div>
        <div id="mario">
          <img id="mario_gif" src="https://i.imgur.com/QGo5isT.gif"  alt="mario"/>
        </div>
        <div id="pikachu">
          <img id="pikachu_gif" src="https://i.gifer.com/5Q0v.gif"  alt="pikachu"/>
        </div>
      </div>
      <div className="scenery" id="foreground1" ref={firstForeground}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
      <div className="scenery" id="foreground2" ref={secondForeground}>
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background1" ref={firstBackground}>
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background2" ref={secondBackground}>
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
      </div>
      
    </div>
  );
}

export default App;