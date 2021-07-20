class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }

    draw(elem) {
        let a = document.createElement('div');
        let img = document.createElement('img');

        img.setAttribute('src', this.image);
        img.classList.add('img-12-min');
        a.innerHTML = `Товар: ${this.name}<br>Цена: ${this.amount}`;
        a.appendChild(img);
        document.querySelector(elem).appendChild(a);
    }
}