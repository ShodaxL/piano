class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload() {
        //bg 2
        this.load.image('voiture1', '![](assets/level/car.png)');

        //bg 1

        this.load.image('', '');

        //ground (premier plan noir)
        this.load.image('');



        for (let i = 1; i <= 10; i++) {
            this.load.image('' + i, '');
        }


        for (let i = 1; i <= 3; i++) {
            this.load.image('' + i, '' + i + '');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for (let i = 1; i <= 3; i++) {
            this.load.image('filterBloody' + i, 'assets/level/filters/bloody/frame' + i + '.png');
        }
        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for (let i = 1; i <= 3; i++) {
            this.load.image('bg-animation-' + i, 'assets/level/background-2/bg-animation/bg-animation-' + i + '.png');

        }
        for (let i = 1; i <= 3; i++) {
            this.load.image('weatherRain' + i, 'assets/level/weather/rain/frame' + i + '.png');
        }

    }



    create() {

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA = this.add.sprite(0, 0, 'bg-animation-1').setOrigin(0, 0);


        let walk = this.add.sprite(0, 0, 'walk1').setOrigin(0, 0);

        //--------------background 2 (tout au fond et flou)--------------------

        let voiture1 = this.add.image(200, 200, 'voiture1').setOrigin(0, 0);
        this.groundContainer.add(voiture1);

        //--------------background 1 (gris) --------------------


        //-------------ground (premier plan noir)---------------------------



        let gFellentree1 = this.add.image(1650, 390, 'gFellentree1').setOrigin(0, 1);
        this.groundContainer.add(gFellentree1);
        gFellentree1.angle = 5

        let gLeft1 = this.add.image(2050, 390, 'gLeft1').setOrigin(0, 0).setScale(4, 1);
        this.groundContainer.add(gLeft1);


        let gWoodenbridge = this.add.image(2000, 290, 'gWoodenbridge').setOrigin(0, 0);
        this.groundContainer.add(gWoodenbridge);
        /**
    

        this.walk = this.add.sprite(100, 175, 'walk1').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'walk',
            frames: [
                {key: 'walk1'},
                {key: 'walk2'},
                {key: 'walk3'},
                {key: 'walk4'},
                {key: 'walk5'},
                {key: 'walk6'},
                {key: 'walk7'},
                {key: 'walk8'},
                {key: 'walk9'},
                {key: 'walk10'},
            ],
            frameRate: 10,
            repeat: -1
        });
        this.walk.play('walk')
        this.walk.scale=0.5
        this.filterBloody = this.add.sprite(0, 0, 'filterBloody1').setOrigin(0, 0);

        //animation de 3 images
        this.anims.create({
            key: 'bloody',
            frames: [
                {key: 'filterBloody1'},
                {key: 'filterBloody2'},
                {key: 'filterBloody3'},


            ],
            frameRate: 16,
            repeat: -1
        });


        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA
        this.weatherRain = this.add.sprite(0, 0, 'weatherRain1').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key: 'weatherRain1'},
                {key: 'weatherRain2'},
                {key: 'weatherRain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.weatherRain.play('rain')


        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2500, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterBloody.scrollFactorX=0;
        this.weatherRain.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
        this.walk.scrollFactorX=0;

    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=30;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-2;
                    break;

            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

}


