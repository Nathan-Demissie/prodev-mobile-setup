import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        First App Created
      </Text>

      {/* Optional navigation example */}
      <Link href="/about" style={{ marginTop: 20, fontSize: 16 }}>
        Go to About Page
      </Link>
    </View>
  );
}
