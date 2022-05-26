import React from 'react';
import unsplash from './Api/unsplash';
import ImageList from './Components/ImageList';
import SearchBar from './Components/SearchBar';

class App extends React.Component {
  state = {images: []}

  componentDidMount(){
    this.onSubmitForm("cars");
  }

  onSubmitForm = async (term) => {
    const response = await unsplash.get('/search/photos',{
      params:{
        query: term
      },
    });
    this.setState({images : response.data.results});
  }
  render(){
    return (
      <div className='ui container' style={{marginTop:'20px'}}>
        <SearchBar onSubmitForm={this.onSubmitForm}/>
        <ImageList image={this.state.images}/>
      </div>
    );
  }
}

export default App;
