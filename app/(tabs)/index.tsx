import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>لوحة التحكم</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>الحسابات النشطة</Text>
          <Text style={styles.statValue}>0</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>المهام الجارية</Text>
          <Text style={styles.statValue}>0</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>الأعضاء المستخرجين</Text>
          <Text style={styles.statValue}>0</Text>
        </View>
      </View>

      <View style={styles.featuresList}>
        <Text style={styles.sectionTitle}>الميزات المتاحة</Text>
        
        <TouchableOpacity style={styles.featureItem}>
          <Text style={styles.featureTitle}>استخراج الأعضاء</Text>
          <Text style={styles.featureDesc}>استخرج أعضاء من المجموعات والقنوات</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem}>
          <Text style={styles.featureTitle}>إضافة جماعية</Text>
          <Text style={styles.featureDesc}>أضف أعضاء بكميات كبيرة مع حماية من الحظر</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem}>
          <Text style={styles.featureTitle}>رسائل جماعية</Text>
          <Text style={styles.featureDesc}>أرسل رسائل لعدة حسابات وقنوات</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem}>
          <Text style={styles.featureTitle}>الرد التلقائي</Text>
          <Text style={styles.featureDesc}>رد تلقائي على الرسائل الواردة</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem}>
          <Text style={styles.featureTitle}>مراقبة المهام</Text>
          <Text style={styles.featureDesc}>تابع تقدم المهام الجارية</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712',
  },
  header: {
    padding: 20,
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  statLabel: {
    color: '#999',
    fontSize: 12,
    marginBottom: 5,
  },
  statValue: {
    color: '#0066ff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  featuresList: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  featureItem: {
    backgroundColor: '#1a1a2e',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#0066ff',
  },
  featureTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featureDesc: {
    color: '#999',
    fontSize: 13,
  },
});
