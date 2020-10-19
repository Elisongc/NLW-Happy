import Image from '../models/image';


export default{
  render(Image:Image){
    return {
      id: Image.id,
      url: `http://localhost:3333/uploads/${Image.path}`,
    };
  },

  renderMany(Images:Image[]){
    return Images.map(Image => this.render(Image));
  }
}