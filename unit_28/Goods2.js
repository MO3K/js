class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }

    draw(elem) {
        let a = document.createElement('div');
        let img = document.createElement('img');

        img.setAttribute('src', this.image);
        img.classList.add('img-12-min');
        if (this.sale) {
            a.innerHTML = `Товар: ${this.name}<br>Цена: <s>${this.amount}</s> ${this.amount * 0.5}`;
        }
        else {
            a.innerHTML = `Товар: ${this.name}<br>Цена: ${this.amount}`;
        }
        a.appendChild(img);
        document.querySelector(elem).appendChild(a);
    }
}