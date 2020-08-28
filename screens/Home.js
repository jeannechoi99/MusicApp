import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import faker from 'faker';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class HeaderTitleExample extends Component {
  constructor(props) {
    super(props);

    const fakeData = [];
    for (i = 0; i < 100; i += 1) {
      fakeData.push({
        type: 'NORMAL',
        item: {
          id: i,
          image: faker.image.avatar(),
          name: faker.name.firstName(),
          description: faker.random.words(5),
        },
      });
    }
    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    };

    this.layoutProvidertop = new LayoutProvider((i) => {
      return this.state.list.getDataForIndex(i).type;
    }, (type, dim) => {
      switch (type) {
        case 'NORMAL':
          dim.width = 150;
          dim.height = 200;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
          break;
      };
    })

    this.layoutProviderbottom = new LayoutProvider((i) => {
      return this.state.list.getDataForIndex(i).type;
    }, (type, dim) => {
      switch (type) {
        case 'NORMAL':
          dim.width = SCREEN_WIDTH;
          dim.height = 70;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
          break;
      };
    })
  }

  rowRenderertop = (type, data) => {
    const { image, name, description } = data.item;
    return (
      <View style={{ margin: 10 }}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    )
  }
  rowRendererbottom = (type, data) => {
    const { image, name, description } = data.item;
    return (
      <View style={styles.listItem}>
        <Image style={{ height: 50, width: 50 }} source={{ uri: image }} />
        <View style={styles.body}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: '앱이름', style: { color: '#fff' } }}
          containerStyle={{ backgroundColor: '#c5a8ff' }}
        />
        <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 15, textAlign: 'center' }}>"오.."</Text>
        <Text style={{ marginLeft: 10 }}>[TOP 100]</Text>
        <View style={{ flex: 0.4 }}>
          <RecyclerListView
            style={{ flex: 1 }}
            isHorizontal={true}
            rowRenderer={this.rowRenderertop}
            dataProvider={this.state.list}
            layoutProvider={this.layoutProvidertop}
          />
        </View>
        <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
          <TouchableOpacity style={{ margin: 5 }}>
            <Text>최신순</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 5 }}>
            <Text>과거순</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 5 }}>
            <Text>인기순</Text>
          </TouchableOpacity>
        </View>
        <RecyclerListView
          style={{ flex: 1 }}
          rowRenderer={this.rowRendererbottom}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProviderbottom}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    minHeight: 1,
    minWidth: 1,
  },
  body: {
    marginLeft: 10,
    marginRight: 10,
    maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
  },
  image: {
    height: 130,
    width: 130,
    margin: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    opacity: 0.5,
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
});