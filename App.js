import { Text, View } from "react-native";

export default function App() {
  // Variabel primitif
  const name = "intan";
  let age = 20;
  const isStudent = true;

  // Variabel kompleks
  const user = { name: "intan", role: "Mahasiswa" };
  const hobbies = ["painting", "Gaming", "Reading", "drawing", "baking", "rajut"];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink", 
      }}
    >
      <Text>Nama: {name}</Text>
      <Text>Umur: {age}</Text>
      <Text>Status: {isStudent ? "Mahasiswa" : "Bukan Mahasiswa"}</Text>
      <Text>User: {user.name} - {user.role}</Text>

      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Hobi:</Text>
      {hobbies.map((hobi, index) => (
        <Text key={index}>{hobi}</Text>
      ))}
    </View>
  );
}