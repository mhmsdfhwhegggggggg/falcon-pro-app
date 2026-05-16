import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0066ff',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: { backgroundColor: '#1a1a2e', borderTopColor: '#333' },
        headerStyle: { backgroundColor: '#030712' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'لوحة التحكم',
          headerTitle: 'Falcon Pro',
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: 'الحسابات',
          headerTitle: 'إدارة الحسابات',
        }}
      />
      <Tabs.Screen
        name="tools"
        options={{
          title: 'الأدوات',
          headerTitle: 'الأدوات المتاحة',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'الإعدادات',
          headerTitle: 'الإعدادات',
        }}
      />
    </Tabs>
  );
}
