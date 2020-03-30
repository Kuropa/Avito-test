import React from 'react';

class Photos extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hits: [] };
      }
   
    componentDidMount() {
        fetch(`https://boiling-refuge-66454.herokuapp.com/images`)
        .then(response => response.json())
        .then(data => {
            this.setState({ hits: data });
        })
    }

    render() {
        const { hits } = this.state;
        return (
          <div className='wrapper'>
            {hits.map(hit =>
              <div key={hit.id} className='photo'>
                <img img={hit.url} src={hit.url} alt=''/>
              </div>
            )}
          </div>
        );
      }
}

export default Photos;