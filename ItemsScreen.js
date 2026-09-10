import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native';
import { useSessions } from '../context/SessionsContext';
import { useAppTheme } from '../context/ThemeContext';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';
import api from '../api/api';

const filters = ['All', 'Morning', 'Sleep', 'Focus', 'Anxiety'];

const librarySections = [
  {
    title: 'Morning',
    data: ['Sunrise Breath', 'Gentle Wake Up', 'Morning Intentions'],
  },
  {
    title: 'Sleep',
    data: ['Deep Sleep', 'Body Scan', 'Night Stories'],
  },
  {
    title: 'Focus',
    data: ['Focus Flow', 'Study Session', 'Clarity Break'],
  },
];

const formattedSections = librarySections.map((section, sectionIndex) => ({
  title: section.title,
  data: section.data.map((name, itemIndex) => ({
    id: `${sectionIndex}-${itemIndex}`,
    name,
  })),
}));

const ItemsScreen = () => {
  const { sessions, loading } = useSessions();
  const { colors } = useAppTheme();
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setProductsLoading(true);
      const response = await api.get('/products', { params: { limit: 6 } });
      setProducts(response.data.products);
    } catch (error) {
      console.log('Failed to load products', error.message);
    } finally {
      setProductsLoading(false);
    }
  };

  const handleRestock = async id => {
    try {
      const response = await api.put(`/products/${id}`, { stock: 50 });
      setProducts(prev =>
        prev.map(item =>
          item.id === id ? { ...item, stock: response.data.stock } : item,
        ),
      );
    } catch (error) {
      console.log('Failed to update product', error.message);
    }
  };

  const handleRemove = async id => {
    try {
      await api.delete(`/products/${id}`);
      setProducts(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.log('Failed to delete product', error.message);
    }
  };

  const renderSessionItem = ({ item }) => (
    <Card>
      <Text style={styles.sessionTitle}>{item.title}</Text>
      <Text style={styles.sessionMeta}>
        {item.duration} min • {item.category}
      </Text>
    </Card>
  );

  const renderProductItem = ({ item }) => (
    <Card title={item.title}>
      <Text style={styles.productMeta}>
        ${item.price} • Stock: {item.stock}
      </Text>
      <View style={styles.productActions}>
        <Button
          label="Restock"
          variant="outline"
          onPress={() => handleRestock(item.id)}
          style={styles.productButton}
        />
        <Button
          label="Remove"
          onPress={() => handleRemove(item.id)}
          style={styles.productButton}
        />
      </View>
    </Card>
  );

  const renderLibraryItem = ({ item }) => (
    <View style={styles.libraryItem}>
      <Text style={styles.libraryItemText}>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.heading, { color: colors.text }]}>My Sessions</Text>
        {loading && <Loading message="Loading sessions..." />}

        <View style={styles.filterRow}>
          {filters.map(item => (
            <View style={styles.filterChip} key={item}>
              <Text style={styles.filterChipText}>{item}</Text>
            </View>
          ))}
        </View>

        <FlatList
          data={sessions}
          renderItem={renderSessionItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />

        <Text style={[styles.heading, { color: colors.text }]}>Meditation Store</Text>
        {productsLoading ? (
          <Loading message="Fetching products..." />
        ) : (
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
          />
        )}

        <Text style={[styles.heading, { color: colors.text }]}>Session Library</Text>
        <SectionList
          sections={formattedSections}
          keyExtractor={item => item.id}
          renderItem={renderLibraryItem}
          renderSectionHeader={renderSectionHeader}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 60,
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 16,
    marginTop: 12,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  filterChip: {
    backgroundColor: '#E5E1FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  filterChipText: {
    color: '#6C63FF',
    fontWeight: '600',
    fontSize: 12,
  },
  sessionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2D2A4A',
    marginBottom: 4,
  },
  sessionMeta: {
    fontSize: 13,
    color: '#6B6889',
  },
  productMeta: {
    fontSize: 13,
    color: '#6B6889',
    marginBottom: 12,
  },
  productActions: {
    flexDirection: 'row',
  },
  productButton: {
    marginRight: 10,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6C63FF',
    backgroundColor: '#F5F3FF',
    paddingVertical: 8,
  },
  libraryItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1FF',
  },
  libraryItemText: {
    fontSize: 14,
    color: '#2D2A4A',
  },
});

export default ItemsScreen;
