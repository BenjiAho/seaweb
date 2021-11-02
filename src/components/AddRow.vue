<template>
  <button type="button" class="btn btn-success btn-outline-light d-table my-5 mx-auto" data-bs-toggle="modal" data-bs-target="#AddForm">
    Add
  </button>

  <!-- Modal Form -->
  <div class="modal fade" id="AddForm" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form action="">
          <div class="modal-header">
            <h5 class="modal-title">Add form</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="Id">ID<span class="text-danger"></span></label>
              <input v-model="addRow.id" type="number"  name="id" class="form-control" id="id" placeholder="Enter ID">
            </div>

            <div class="mb-3">
              <label for="Name">Name<span class="text-danger"></span></label>
              <input v-model="addRow.name" type="text"  name="name" class="form-control" id="name" placeholder="Enter Name" required>
            </div>

            <div class="mb-3">
              <label for="Stock"></label>
              <input type="checkbox" name="Stock" id="Stock" v-model="addRow.status">

              <span v-if="addRow.status == true" class="text-success">
                Disponible en stock
              </span>

              <span v-else class="text-danger">
                Rupture de stock
              </span>
            </div>

            <div class="mb-3">
              <label for="Date">Date<span class="text-danger"></span></label>
              <input v-model="addRow.updated_at"  type="date" name="Date" class="form-control" id="Date" placeholder="Enter like this : 1975-11-12T01:36:12.000000Z">
            </div>
          </div>
          <div class="modal-footer pt-4">
            <button type="button" class="btn btn-success mx-auto w-100" data-bs-dismiss="modal"  @click="$emit('add', addRow)">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  props: {
    data:{
      type: Array,
      required: true
    }
  },
  data(){
    return{
      addRow : {
        id:null,
        name: null,
        status:true,
        updated_at:null,
      },

    }
  }
}
</script>