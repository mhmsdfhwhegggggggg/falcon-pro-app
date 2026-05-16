import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AccountsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>إدارة الحسابات</Text>
        <Text style={styles.description}>لا توجد حسابات مضافة حالياً</Text>
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
