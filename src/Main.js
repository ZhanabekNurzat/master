import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image,ScrollView,ListView
} from 'react-native';
import {RkCard,RkTheme,RkText} from 'react-native-ui-kitten';
import StarRating from 'react-native-star-rating';
export default class Main extends Component {
  constructor(props) {
   super(props);
   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {
     dataSource: ds.cloneWithRows([
       {name: 'Салон красоты "Loreal HOMME"',rating: 3}, {name: 'Beauty',rating:4}, {name: 'Салон красоты "Manific"',rating: 2.5},
     ])
   };
 }
  static navigationOptions = {
        title: 'Главная',

  }

  renderrow(data){
    return(
        <StarItem rowData={data} />
    );
  }
  render() {
    return (
      <ScrollView>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderrow.bind(this)}
        />
      </ScrollView>
    );
  }
}

class StarItem extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    const { rowData } = this.props;
    this.setState({
      selected: 0,
      starCount: rowData.rating
    });
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  toSelectedItems(rating){
    if(this.state.selected==0){
      this.setState({
        selected: 1
      });
    }else{
      this.setState({
        selected: 0
      });
    }
  }
  render(){
    const { rowData } = this.props;
    return (
      <RkCard rkType='story' style={styles.cardMargin}>
        <Image rkCardImg source={require('./IMG_8203.jpg')}/>
        <View rkCardContent>
          <RkText style={styles.headerText}>{rowData.name}</RkText>
          <Text>Main point for all customization is RkTheme object rkType used here to set style for each of 6 rkCard nested element props  of RkTheme</Text>
          <Text>
            <Text style={{fontWeight: "bold"}}>Адрес:</Text>
            <Text> Ул. Макатаева-Абылайхана 456</Text>
          </Text>
          <View style={styles.starcontainer}>
            <Text style={{fontWeight: "bold"}}>Рейтинг:  </Text>
            <StarRating
              disabled={false}
              maxStars={5}
              starSize={25}
              starColor={'gold'}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
            />
            <View style={styles.selectedContainer}>
              <Text style={{fontWeight: "bold",marginTop:'1%'}}>В избранное:  </Text>
              <StarRating
                disabled={false}
                maxStars={1}
                style={styles.selectbleStar}
                starSize={25}
                starColor={'gold'}
                rating={this.state.selected}
                selectedStar={(rating) => this.toSelectedItems(rating)}
              />
            </View>
        </View>
      </View>
    </RkCard>
  );
  }
}
RkTheme.setType('RkCard', 'story', {
  img: {
    height: 100,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  starcontainer: {
    flex: 1,
    marginTop:10,
    flexDirection: 'row',

  },
  selectedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end'
  },
  image: {
    height: 100
  },
  headerText: {
    fontWeight: 'bold',
    color: "#157064"
  },
  cardMargin: {
    paddingTop: 10,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  }

});
