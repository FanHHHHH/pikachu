const s = `.pikachu {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    height: 100vh;
    background: #ffe600;
  }
  .pikachu::before,
  .pikachu::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    33% {
      transform: rotate(-10deg);
    }
    66% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  
  .nose {
    position: absolute;
    top: 240px;
    left: 50%;
    margin-left: -11px;
    border: 11px solid black;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom: none;
  }
  .nose:hover {
    transform-origin: 50% 100%;
    animation: shake 0.4s linear infinite;
    cursor: pointer;
  }
  .nose::before {
    position: absolute;
    top: -17px;
    left: -11px;
    content: '';
    display: block;
    width: 22px;
    height: 10px;
    border-top: 6px solid black;
    border-radius: 50%;
  }
  
  .eye {
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -32px;
    border: 3px solid black;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #2e2e2e;
  }
  .eye::after {
    display: block;
    position: absolute;
    left: 6px;
    content: '';
    width: 28px;
    height: 28px;
    border: 3px solid #2e2e2e;
    border-radius: 50%;
    background: white;
  }
  
  .eye.left {
    margin-left: -167px;
  }
  .eye.right {
    margin-left: 112px;
  }
  .mouth {
    position: absolute;
    left: 50%;
    top: 280px;
    width: 204px;
    height: 180px;
    margin-left: -102px;
    overflow: hidden;
  }
  .mouth .up.lip {
    position: absolute;
    top: -9px;
    width: 100px;
    height: 30px;
    border: 4px solid black;
    border-bottom-left-radius: 40px;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(-20deg);
    z-index: 1;
    background: #ffe600;
  }
  .mouth .up.lip.right {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 40px;
    transform: rotate(20deg);
    margin-left: 100px;
  }
  .mouth .up.lip::after {
    content: '';
    position: absolute;
    top: -8px;
    border-right: 6px solid #ffe600;
    height: 30px;
  }
  .mouth .up.lip.left::after {
    right: -5px;
  }
  .mouth .up.lip.right::after {
    left: -5px;
  }
  .mouth .down {
    position: absolute;
    left: 50%;
    top: -622px;
    width: 180px;
    height: 800px;
    border: 3px solid black;
    margin-left: -90px;
    border-radius: 50%;
    background: #9b000a;
    overflow: hidden;
  }
  .mouth .down .inner {
    position: absolute;
    bottom: -56px;
    width: 200px;
    height: 200px;
    background: #ff485f;
    margin-left: -10px;
    z-index: 2;
    border-radius: 50% 50% 0 0;
  }
  .reddot {
    position: absolute;
    left: 50%;
    margin-left: -44px;
    z-index: 3;
    top: 324px;
    width: 88px;
    height: 88px;
    border: 3px solid black;
    border-radius: 50%;
    background: #ff0000;
  }
  .reddot.left {
    transform: translateX(-178px);
  }
  .reddot.right {
    transform: translateX(178px);
  }
`
export default s
