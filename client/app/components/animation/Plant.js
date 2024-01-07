"use client"
import React from 'react';
import Image from 'next/image'
import plantImg from '../../../public/svr.png'

const Plant = () => {
  const multiplier = 1;
  const sunsize = 5 * multiplier;
  const Plant = 10 * multiplier;
  const orbitdistance = 40 * multiplier;
  const speed = 2.4;


  return (
    <>
    <div id="oneplus"> 

      <Image src={plantImg} alt="plant" width={500} height={500} />

    </div>
    <style jsx>{`
        html,
        body {
          font-size: 0.25vw;
          overflow: hidden;
          height: 100%;
        }

        #oneplus {
          position: absolute;
          left: 44%;
          top: 35%;
          transform: translate(-50%, -50%);
          width: ${sunsize * 2}rem;
          height: ${sunsize * 2}rem;
          // display: flex;
          // align-items: center;
          // justify-content: center;
          // color: white;
          font-size: 2rem;
          font-weight: bold;
          border-radius: ${sunsize * 1}rem;
          animation: scaleAndFade ${speed * 3}s cubic-bezier(0.86, 0, 0.07, 1) forwards;

          &::after,
          &::before {
            content: '';
            position: absolute;
            width: ${Plant * .2}rem;
            height: ${Plant * .2}rem;
            border-radius: ${Plant * 1}rem;
            background-color: white;
            margin-left: 1rem;
            top: -6rem;
            left: 3rem;
            transform-origin: 45% 11rem;
            animation: spinAndMove ${speed * 3}s cubic-bezier(0.86, 0, 0.07, 1) forwards;
          }
        }

        @keyframes spinAndMove {
          0%, 25% {
            transform: rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: rotate(360deg);
            opacity: 1;
          }
          75% {
            transform: rotate(720deg) translateY(0);
            opacity: 1;
          }
          100% {
            transform: rotate(720deg) translateY(${sunsize}rem);
            opacity: 0;
          }
        }

        @keyframes scaleAndFade {
          0%, 94% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(100);
            opacity: 0;
          }
        }
      `}</style>    
    </>
  );
};

export default Plant;
