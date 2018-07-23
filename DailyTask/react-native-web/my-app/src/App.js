import React from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Back Button</Text>
          <Text>Aji Lantang Mardika</Text>
          <Text>Log Out</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.basicProfile}>
            <Image
              source={{
                uri:
                  'http://img2-ak.lst.fm/i/u/arO/5be86c72090e40728b39cba3c99d4689',
              }}
              style={{width: 250, height: 250, borderRadius: '50%'}}
            />
            <View
              style={{
                width: 100,
                height: 50,
                backgroundColor: 'powderblue',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>Add Friend</Text>
            </View>
          </View>

          <View syle={styles.friendList}>
            <ScrollView>
              <View style={styles.friendListContent}>
                <Image
                  source={{
                    uri:
                      'http://img2-ak.lst.fm/i/u/arO/5be86c72090e40728b39cba3c99d4689',
                  }}
                  style={{width: 100, height: 100, borderRadius: '50%'}}
                />
                <View style={styles.detailFormContact}>
                  <Text style={styles.textForm}>
                    Name :.....................................
                  </Text>
                  <Text style={styles.textForm}>Address :</Text>
                </View>
              </View>
              <View style={styles.friendListContent}>
                <Image
                  source={{
                    uri:
                      'http://img2-ak.lst.fm/i/u/arO/5be86c72090e40728b39cba3c99d4689',
                  }}
                  style={{width: 100, height: 100, borderRadius: '50%'}}
                />
                <View style={styles.detailFormContact}>
                  <Text style={styles.textForm}>
                    Name :....................................
                  </Text>
                  <Text style={styles.textForm}>Address :</Text>
                </View>
              </View>
              <View style={styles.friendListContent}>
                <Image
                  source={{
                    uri:
                      'http://img2-ak.lst.fm/i/u/arO/5be86c72090e40728b39cba3c99d4689',
                  }}
                  style={{width: 100, height: 100, borderRadius: '50%'}}
                />
                <View style={styles.detailFormContact}>
                  <Text style={styles.textForm}>
                    Name :....................................
                  </Text>
                  <Text style={styles.textForm}>Address :</Text>
                </View>
              </View>
              <View style={styles.friendListContent}>
                <Image
                  source={{
                    uri:
                      'http://img2-ak.lst.fm/i/u/arO/5be86c72090e40728b39cba3c99d4689',
                  }}
                  style={{width: 100, height: 100, borderRadius: '50%'}}
                />
                <View style={styles.detailFormContact}>
                  <Text style={styles.textForm}>
                    Name :.....................................
                  </Text>
                  <Text style={styles.textForm}>Address :</Text>
                </View>
              </View>
              <View style={styles.friendListContent}>
                <Image
                  source={{
                    uri:
                      'http://img2-ak.lst.fm/i/u/arO/5be86c72090e40728b39cba3c99d4689',
                  }}
                  style={{width: 100, height: 100, borderRadius: '50%'}}
                />
                <View style={styles.detailFormContact}>
                  <Text style={styles.textForm}>
                    Name :.....................................
                  </Text>
                  <Text style={styles.textForm}>Address :</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    margin: 10,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  basicProfile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  friendList: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  friendListContent: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: 'powderblue',
  },
  detailFormContact: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginRight: 20,
  },
});
