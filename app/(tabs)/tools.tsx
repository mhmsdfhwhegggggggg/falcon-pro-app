import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ToolsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>الأدوات</Text>
        <Text style={styles.description}>جميع الأدوات متاحة</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#030712' },
  content: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  description: { color: '#999' },
});
