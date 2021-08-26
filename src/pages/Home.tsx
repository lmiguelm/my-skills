import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Platform, FlatList } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillsCard';

type Skill = {
  id: string;
  name: string;
};

export function Home() {
  const [newSkill, setNewSkill] = useState<string>('');
  const [greeting, setGreeing] = useState<string>('');
  const [mySkills, setMySkills] = useState<Skill[]>([]);

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

    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills((oldstate) => [...oldstate, data]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldstate) => oldstate.filter((skill) => skill.id !== id));
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

      <Button title="Add" onPress={handleNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        keyExtractor={({ id }) => id}
        data={mySkills}
        renderItem={({ item }) => (
          <SkillCard onPress={() => handleRemoveSkill(item.id)} key={item.id} skill={item.name} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
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
