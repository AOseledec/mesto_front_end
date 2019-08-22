import {Card} from './Card.js';
export class CardList {
    constructor(container, /*listCards,*/ popup) {
      this.container  = container;
      // this.listCards  = listCards;
      this.popupImage = new Popup(popup);
      
      this.container.addEventListener('click', this.openImagePopup.bind(this));
      // this.render();
    }
  
    addCard(title, url, idCard) {
      const { cardElement } = new Card(title, url, idCard);
      this.container.appendChild(cardElement);
    }
  
    // render() {
    //   this.listCards.forEach(element => {
    //     this.addCard(element.name, element.link);
    //   });
    // }
  
    openImagePopup(event){
      if(event.target.classList.contains('place-card__image')){
        this.popupImage.openImage(event.target.style.backgroundImage.slice(5,-2),this.popupImage);
      }
    }
  
}