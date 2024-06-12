import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Initially no category selected

  const categories = [
    { id: 1, name: 'Technology', image: 'https://via.placeholder.com/150', color: '#4CAF50' },
    { id: 2, name: 'Travel', image: 'https://via.placeholder.com/150', color: '#FF9800' },
    { id: 3, name: 'Fashion', image: 'https://via.placeholder.com/150', color: '#2196F3' },
    { id: 4, name: 'Food', image: 'https://via.placeholder.com/150', color: '#E91E63' },
    { id: 5, name: 'Health', image: 'https://via.placeholder.com/150', color: '#9C27B0' },
  ];

  const posts = [
    { id: 1, title: '10 Best Gadgets of 2023', category: 'Technology', image: 'https://via.placeholder.com/300', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Exploring the Mountains of Nepal', category: 'Travel', image: 'https://via.placeholder.com/300', excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Fashion Trends for Fall 2023', category: 'Fashion', image: 'https://via.placeholder.com/300', excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, title: 'Delicious Recipes from Around the World', category: 'Food', image: 'https://via.placeholder.com/300', excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, title: '5 Essential Tips for a Healthy Lifestyle', category: 'Health', image: 'https://via.placeholder.com/300', excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  const featuredPosts = [
    { id: 1, title: 'Top Tech Innovations of the Year', category: 'Technology', image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Best Travel Destinations for 2023', category: 'Travel', image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Trending Fashion Styles', category: 'Fashion', image: 'https://via.placeholder.com/300' },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItem, selectedCategory === item.id && styles.selectedCategory]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Your existing code here...

  const renderPost = ({ item }) => (
    <TouchableOpacity style={styles.postItem} onPress={() => navigation.navigate('PostDetails', item)}>
      {/* Pass the item (post details) to the navigate function */}
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postExcerpt}>{item.excerpt}</Text>
    </TouchableOpacity>
  );

  // Your existing code here...

  // const renderPost = ({ item }) => (
  //   <TouchableOpacity style={styles.postItem}>
  //     <Image source={{ uri: item.image }} style={styles.postImage} />
  //     <Text style={styles.postTitle}>{item.title}</Text>
  //     <Text style={styles.postExcerpt}>{item.excerpt}</Text>
  //   </TouchableOpacity>
  // );

  const renderFeaturedPost = ({ item }) => (
    <TouchableOpacity style={styles.featuredPostItem}>
      <Image source={{ uri: item.image }} style={styles.featuredPostImage} />
      <Text style={styles.featuredPostTitle}>{item.title}</Text>
      <Text style={styles.featuredPostCategory}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      

      {/* Categories Section */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
      />

      {/* Featured Posts Slider */}
      <FlatList
        data={featuredPosts}
        renderItem={renderFeaturedPost}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredPostsList}
      />

      {/* Posts Section */}
      <Text style={styles.sectionTitle}>Latest Posts</Text>
      <FlatList
        data={selectedCategory ? posts.filter(post => post.category === categories.find(cat => cat.id === selectedCategory).name) : posts}
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.postsList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  featuredPostsList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  featuredPostItem: {
    marginRight: 12,
    width: 250,
    marginBottom: 16,
  },
  featuredPostImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  featuredPostTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featuredPostCategory: {
    fontSize: 14,
    color: '#666',
  },
  categoriesList: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  categoryItem: {
    marginRight: 12,
    alignItems: 'center',
  },
  selectedCategory: {
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 8,
  },
  categoryImage: {
    width: 100,
    height:    100,
    borderRadius: 50,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  postsList: {
    paddingHorizontal: 16,
  },
  postItem: {
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postExcerpt: {
    fontSize: 16,
  },
});

export default HomeScreen;

