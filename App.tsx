import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// Onboarding data
const SCREENS = [
  {
    title: "Welcome to Loop 🎉",
    subtitle: "Discover events, meet people, and explore your city.",
    image: "https://images.unsplash.com/photo-1515165562835-c4c6b16e8c57?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Find Your Vibe 🎶",
    subtitle: "Connect with friends and enjoy what your city offers.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Join the Loop 🔥",
    subtitle: "Get started and never miss out on the action.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
  },
];

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0);

  const handleNext = () => {
    if (screenIndex < SCREENS.length - 1) {
      setScreenIndex(screenIndex + 1);
    }
  };

  const handleSkip = () => {
    setScreenIndex(SCREENS.length - 1);
  };

  const { title, subtitle, image } = SCREENS[screenIndex];

  return (
    <SafeAreaView style={styles.container}>
      {/* Illustration */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Headline */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {/* Navigation buttons */}
      <View style={styles.buttonRow}>
        {screenIndex < SCREENS.length - 1 ? (
          <>
            <TouchableOpacity style={styles.buttonOutline} onPress={handleSkip}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFilled} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.buttonFilled}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Progress dots */}
      <View style={styles.dotsRow}>
        {SCREENS.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.dot,
              { backgroundColor: idx === screenIndex ? "#ff6b00" : "#ddd" },
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

/* --------------------
   Styles (bold colors)
-------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a148c", // Deep purple background
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 280,
    height: 200,
    borderRadius: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: "#00e5ff", // Teal
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 30,
  },
  buttonFilled: {
    backgroundColor: "#ff6b00", // Bold orange
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonOutline: {
    borderColor: "#ff6b00",
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  dotsRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

