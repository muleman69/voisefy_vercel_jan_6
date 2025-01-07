import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme, FAB, List, Text, IconButton, Surface } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

interface Note {
  id: string;
  transcript: string;
  category: string;
  timestamp: Date;
}

const recentNotes: Note[] = [
  { id: '1', transcript: 'Idea for a new marketing campaign', category: 'Marketing', timestamp: new Date() },
  { id: '2', transcript: 'Potential partnership with XYZ company', category: 'Business Development', timestamp: new Date() },
  { id: '3', transcript: 'Feature request: AI-powered competitor analysis', category: 'Product', timestamp: new Date() },
];

export const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const [isRecording, setIsRecording] = useState(false);

  const renderNoteItem = ({ item }: { item: Note }) => (
    <List.Item
      title={item.transcript}
      description={`${item.category} • ${item.timestamp.toLocaleTimeString()}`}
      left={props => <List.Icon {...props} icon="note-text" />}
      right={props => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
      <Surface style={styles.header}>
        <Text variant="headlineMedium">Voice Notes AI</Text>
      </Surface>
      <View style={styles.content}>
        <Text variant="titleMedium" style={styles.recentNotesTitle}>Recent Notes</Text>
        <FlatList
          data={recentNotes}
          renderItem={renderNoteItem}
          keyExtractor={item => item.id}
          style={styles.notesList}
        />
      </View>
      <View style={styles.quickActions}>
        <IconButton icon="folder" size={24} onPress={() => {}} />
        <IconButton icon="magnify" size={24} onPress={() => {}} />
        <IconButton icon="cog" size={24} onPress={() => {}} />
      </View>
      <FAB
        icon={isRecording ? 'stop' : 'microphone'}
        style={[styles.fab, { backgroundColor: isRecording ? theme.colors.error : theme.colors.primary }]}
        onPress={() => setIsRecording(!isRecording)}
        animated={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  recentNotesTitle: {
    marginBottom: 8,
  },
  notesList: {
    flex: 1,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 70,
  },
});
