const params = {

    lines: [
        {
            background: '#00F',
            updateTime: '2000',
            elements: [
                {
                    background: '#feff5f',
                    width: 25
                },
                {
                    background: '#ff5a19',
                    width: 20
                },
                {
                    background: '#21ffd0',
                    width: 20
                }
            ]
        },
        {
            background: '#505460',
            updateTime: '3000',
            elements: [
                {
                    background: '#ffca7b',
                    width: 35
                },
                {
                    background: '#ff3ec2',
                    width: 10
                },
                {
                    background: '#1e515d',
                    width: 25
                }
            ]
        },
        {
            background: '#7c8377',
            updateTime: '3500',
            elements: [
                {
                    background: '#70ff47',
                    width: 35
                },
                {
                    background: '#ff272a',
                    width: 10
                },
                {
                    background: '#7b6abc',
                    width: 25
                }
            ]
        }
    ]
};

class DrawLines {

    constructor(params) {

        this.lines = params.lines;
        this.line = [];

    }

    createLine() {

        let linesLength = this.lines.length;
        let screenSize = document.documentElement.clientHeight;

        this.line = this.lines.map((line) => {

            let el = document.createElement('div');
            el.style.display = 'flex';
            el.style.justifyContent = 'space-around';
            el.style.background = line.background;
            el.style.height = screenSize / linesLength + 'px';

            setInterval(() => {

                console.log(el);

                ColorElement.updateColor(el)

            }, line.updateTime);

            let elContent = this.createColumns(line.elements);
            elContent.forEach((item) => el.append(item));

            return el;

        });

        return this.line;

    }

    createColumns(elements) {

        let columns = elements.map((element) => {

            let el = document.createElement('div');
            el.style.background = element.background;
            el.style.width = element.width + '%';

            return el;

        });

        return columns;
    }

    drawLines(targetElementId) {

        let target = document.getElementById(targetElementId);
        let elements = this.createLine();

        elements.forEach((item) => target.append(item));

    }
}

class ColorElement {

    static generateColor() {

        function randomInteger(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }

        let a = randomInteger(0, 255);
        let b = randomInteger(0, 255);
        let c = randomInteger(0, 255);


        return `rgb(${a},${b},${c})`;

    }

    static updateColor(element) {

        let color = this.generateColor();

        element.style.background = color;

    }

}

let lines = new DrawLines(params);
lines.drawLines('target');

