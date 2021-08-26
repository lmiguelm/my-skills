import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Platform, FlatList } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillsCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeing] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeing('Good morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeing('Good afternoon');
    } else {
      setGreeing('Good night');
    }
  }, []);

  function handleNewSkill() {
    if (newSkill === '') return;
    setMySkills((oldstate) => [...oldstate, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Miguel</Text>
      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        value={newSkill}
        onChangeText={setNewSkill}
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
      />

      <Button onPress={handleNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        keyExtractor={(skill) => skill}
        data={mySkills}
        renderItem={({ item }) => <SkillCard key={item} skill={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#ccc',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 20,
    marginTop: 30,
    borderRadius: 7,
  },
});
