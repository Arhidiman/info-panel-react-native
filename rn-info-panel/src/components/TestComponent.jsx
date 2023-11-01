import { StyleSheet, Text, View } from 'react-native';

export default function TestComponent() {
  return (
    <View style={styles.testComponent}>
      <Text>test component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  testComponent: {
    width:100,
    height: 100,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
