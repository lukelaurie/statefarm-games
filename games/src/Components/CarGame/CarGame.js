import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import "../../styles/carGameStyles.css";

const images = [
  ["car", "jakeincar.png"],
  ["yellow", "yellow.png"],
  ["bush", "bush.png"],
  ["banana", "bananapeel.png"],
  ["oncomingCar", "car.png"],
  ["cat", "cat.png"],
  ["flocar", "flocar.png"],
  ["pothole", "pothole.png"],
];

const baseVelocity = -120;

const CarGame = ({ modifyScore }) => {
  const handleCollision = (curGame, item, oncomingItem) => {
    // curGame.scene.pause();
    // // Display a message indicating that the game is over
    // const gameOverText = curGame.add.text(400, 300, "Game Over", {
    //   fontSize: "32px",
    //   fill: "#fff",
    // });
    // gameOverText.setOrigin(0.5);
    modifyScore(item);
    oncomingItem.setVelocityX(0); // Stop the oncoming item
    // oncomingItem.disableBody(true, true); // Disable and hide the oncoming item
    oncomingItem.destroy();
  };

  const chooseRandomIcon = (window, curGame, isFirst) => {
    let curEvent = Math.floor(Math.random() * (images.length - 3)) + 3;
    addOncomingItem(window, curGame, images[curEvent][0], isFirst);
  };

  const addBush = (window, curGame, isTop) => {
    const x_coord = window.innerWidth;
    let y_coord;

    // y_coord = Math.floor(Math.random() * (-120 - -140)) + -120;
    y_coord = 0;
    const bush = curGame.physics.add
      .image(x_coord, y_coord, "bush")
      .setScale(0.2);

    bush.setVelocity(baseVelocity, 0);
    bush.setDepth(2);
  };

  const addOncomingItem = (window, curGame, item, isFirst) => {
    let x_coord = window.innerWidth;
    if (isFirst == 0) x_coord -= 400;
    if (isFirst == 1) x_coord -= 150;
    let y_coord = Phaser.Math.Between(130, 400); // Random y-coordinate

    let scale;
    let velocity;
    switch (item) {
      case "banana":
        scale = 0.2;
        velocity = baseVelocity;
        break;
      case "cat":
        scale = 0.15;
        velocity = Math.floor(Math.random() * (-170 - -135 + 1)) + -105;
        break;
      case "pothole":
        scale = 0.2;
        velocity = baseVelocity;
        break;
      case "flocar":
        scale = 0.35;
        velocity = Math.floor(Math.random() * (-280 - -170 + 1)) + -105;
        break;
      case "oncomingCar":
        scale = 0.35;
        velocity = Math.floor(Math.random() * (-240 - -170 + 1)) + -105;
        break;
      case "bush":
        scale = .15;
        velocity = baseVelocity;
        if (isFirst === 2) {
            y_coord = Math.floor(Math.random() * (55 - 30)) + 30;
        } else {
            y_coord = Math.floor(Math.random() * (485 - 465)) + 465;
        }
    }

    // Add banana
    const oncomingItem = curGame.physics.add
      .image(x_coord, y_coord, item)
      .setScale(scale);
    oncomingItem.setVelocity(velocity, 0); // Move left

    // Collide with item and execute handleCollision function
    curGame.physics.add.collider(
      curGame.cube,
      oncomingItem,
      () => handleCollision(curGame, item, oncomingItem),
      null,
      curGame
    );
  };

  const setTimeIntervals = (curGame) => {
    // show the lines
    curGame.time.addEvent({
      delay: 1000,
      callback: () => displayLines(window, curGame),
      callbackScope: curGame,
      loop: true,
    });

    // show the random icons
    curGame.time.addEvent({
      delay: Math.floor(Math.random() * (3500 - 1000)) + 1000,
      callback: () => chooseRandomIcon(window, curGame, 2),
      callbackScope: curGame,
      loop: true,
    });

    // show the bushes
    curGame.time.addEvent({
      delay: Math.floor(Math.random() * (5000 - 1000)) + 1000,
      callback: () => addOncomingItem(window, curGame, "bush", 2),
      callbackScope: curGame,
      loop: true,
    });

    curGame.time.addEvent({
      delay: Math.floor(Math.random() * (5000 - 1000)) + 1000,
      callback: () => addOncomingItem(window, curGame, "bush", 3),
      callbackScope: curGame,
      loop: true,
    });
  };

  const displayLines = (window, curGame) => {
    const x_coord = window.innerWidth;
    const y_coord = 253;

    // Add banana
    const roadLine = curGame.physics.add
      .image(x_coord, y_coord, "yellow")
      .setScale(0.2);
    roadLine.setVelocity(baseVelocity, 0);
  };

  const displayInitialLines = (curGame) => {
    const x_coord = window.innerWidth;
    const y_coord = 253;
    const numLines = Math.ceil(x_coord / 110); // Number of lines based on the width of the screen

    for (let i = 0; i < numLines; i++) {
      const roadLine = curGame.physics.add
        .image(i * 115, y_coord, "yellow")
        .setScale(0.2);
      roadLine.setVelocity(baseVelocity, 0);
    }
  };

  const GameScene = {
    key: "CarGame",
    preload: function () {
      for (let i = 0; i < images.length; i++)
        this.load.image(images[i][0], images[i][1]);
    },

    create: function () {
      // set the starting position
      this.cube = this.physics.add.image(400, 300, "car").setScale(0.3);
      this.cube.setDepth(1);
      // prevent from going out boarder
      this.cube.setCollideWorldBounds(true);
      this.cube.body.setAllowGravity(false);
      this.cube.body.setImmovable(true);

      this.cube.body.setCircle(this.cube.width / 3, 45, 50);

      // allow use keys
      this.cursors = this.input.keyboard.createCursorKeys();

      displayInitialLines(this);

      chooseRandomIcon(window, this, 0);
      chooseRandomIcon(window, this, 1);

      setTimeIntervals(this);
    },

    update: function () {
      if (this.cursors.up.isDown) {
        this.cube.setVelocityY(-200);
      } else if (this.cursors.down.isDown) {
        this.cube.setVelocityY(200);
      } else {
        this.cube.setVelocityY(0);
      }
    },
  };

  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: "100%",
      height: "505px",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: true,
        },
      },
      transparent: true,
      scene: GameScene,
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;
    // cleanup
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container" className="game-view" />;
};

export default CarGame;
