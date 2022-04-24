import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import "./directory.styles.scss"

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
          sections: [
            {
              title: "hats",
              imageURL: "https://i.ibb.co/cvpntL1/hats.png",
              id: 1,
              linkUrl: "shop/hats",
            },
            {
              title: "jackets",
              imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
              id: 2,
              linkUrl: "shop/jackets",
            },
            {
              title: "sneakers",
              imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
              id: 3,
              linkUrl: "shop/sneakers",
            },
            {
              title: "womens",
              imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
              size: "large",
              id: 4,
              linkUrl: "shop/womens",
            },
            {
              title: "mens",
              imageURL: "https://i.ibb.co/R70vBrQ/men.png",
              size: "large",
              id: 5,
              linkUrl: "shop/mens",
            },
          ],
        };
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map( ({title, imageURL, id, size}) => (
                    <MenuItem key={id} title= {title} imageURL= {imageURL} size={size}/>
                ))}
            </div>
        )
    }
}

export default Directory