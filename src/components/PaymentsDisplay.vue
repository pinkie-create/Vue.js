<template>
  <div>
    <v-container>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1">
        <template v-slot:top>
          <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="teal" dark class="mb-2" v-bind="attrs" v-on="on"
                >Add new cost <v-icon>mdi-plus</v-icon></v-btn
              >
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col :cols="1" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.id"
                        label="id"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="editedItem.date"
                        label="Date"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="editedItem.category"
                        label="Category"
                      ></v-text-field>
                    </v-col>
                    <v-col :cols="2" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.value"
                        label="Value"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
      <!-- <v-row>
        <v-col :cols="1">#</v-col>
        <v-col>Date</v-col>
        <v-col>Category</v-col>
        <v-col :cols="2">Value</v-col>
      </v-row>
      <v-row v-for="(item, idx) in items" :key="idx">
        <v-col :cols="1">{{ item.id }}</v-col>
        <v-col>{{ item.date }}</v-col>
        <v-col>{{ item.category }}</v-col>
        <v-col :cols="2">{{ item.value }}</v-col>
      </v-row> -->
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    items: [],
    dialogDelete: false,
    headers: [
      {
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "#", value: "id" },
      { text: "Date", value: "date" },
      { text: "Category", value: "category" },
      { text: "Value", value: "value" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      date: 0,
      category: "Sport",
      value: 0,
    },
    defaultItem: {
      id: 0,
      date: 0,
      category: "Sport",
      value: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          id: 1,
          date: "20.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 2,
          date: "21.03.2020",
          category: "Navigation",
          value: 50,
        },
        {
          id: 3,
          date: "22.03.2020",
          category: "Sport",
          value: 450,
        },
        {
          id: 4,
          date: "23.03.2020",
          category: "Entertaiment",
          value: 969,
        },
        {
          id: 5,
          date: "24.03.2020",
          category: "Education",
          value: 1500,
        },
        {
          id: 6,
          date: "25.03.2020",
          category: "Food",
          value: 200,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
