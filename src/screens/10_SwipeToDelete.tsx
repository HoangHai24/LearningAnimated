import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from '../components/10_ListItem';

const TITLES = [
    'Record the dismissible tutorial 🎥',
    'Leave 👍🏼 to the video',
    'Check YouTube comments',
    'Subscribe to the channel 🚀',
    'Leave a ⭐️ on the GitHub Repo',
  ];

export interface TaskInterface {
    title: string;
    index: number;
}

const BACKGROUND_COLOR = '#FAFBFF';

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({title, index}))
const SwipeToDelete = () => {
    const [tasks, setTasks] = useState(TASKS);

    const scrollRef = useRef(null)
    const onDismiss = () => {

    }
    return (
        <SafeAreaView style={styles.container}>
          {/* <StatusBar /> */}
          <Text style={styles.title}>Tasks</Text>
          <ScrollView ref={scrollRef} style={{ flex: 1 }}>
            {tasks.map((task) => (
              <ListItem
                // simultaneousHandlers={scrollRef}
                key={task.index}
                task={task}
                // onDismiss={onDismiss}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BACKGROUND_COLOR,
    },
    title: {
      fontSize: 60,
      marginVertical: 20,
      paddingLeft: '5%',
    },
  });
export default SwipeToDelete;
