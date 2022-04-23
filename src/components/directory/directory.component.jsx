import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import "./directory.styles.scss"

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
          sections: [
            {
              id: 1,
              title: "hats",
              imageURL: "https://i.ibb.co/cvpntL1/hats.png",
            },
            {
              id: 2,
              title: "hats",
              imageURL: "https://i.ibb.co/cvpntL1/hats.png",
            },
            {
              id: 3,
              title: "hats",
              imageURL: "https://i.ibb.co/cvpntL1/hats.png",
            },
            {
              id: 4,
              title: "hats",
              imageURL: "https://i.ibb.co/cvpntL1/hats.png",
            },
            {
              id: 5,
              title: "hats",
              imageURL: "https://i.ibb.co/cvpntL1/hats.png",
            },
          ],
        };
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map( ({title, imageURL, id}) => (
                    <MenuItem key={id} title= {title}/>
                ))}
            </div>
        )
    }
}

export default Directory