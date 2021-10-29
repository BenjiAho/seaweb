<template>
  <button type="button" class="btn btn-dark btn-outline-light d-table my-5 mx-auto" data-bs-toggle="modal" data-bs-target="#AddForm">
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
              <label for="Id">Id<span class="text-danger"></span></label>
              <input type="number" name="Id" class="form-control" id="Id" placeholder="Enter ID">
            </div>

            <div class="mb-3">
              <label for="Name">Name<span class="text-danger"></span></label>
              <input type="text" name="Name" class="form-control" id="Name" placeholder="Enter Name">
            </div>

            <div class="mb-3">
              <label for="Stock">Stock<span class="text-danger"></span></label>
              <input type="text" name="Stock" class="form-control" id="Stock" placeholder="Enter true or false">
            </div>

            <div class="mb-3">
              <label for="Date">Date<span class="text-danger"></span></label>
              <input type="text" name="Date" class="form-control" id="Date" placeholder="Enter like this : 1975-11-12T01:36:12.000000Z">
            </div>
          </div>
          <div class="modal-footer pt-4">
            <button type="button" class="btn btn-success mx-auto w-100" data-bs-dismiss="modal">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addRow",
  props: {
    data:{
      type: Array,
      required: true
    }
  },
  data(){
    return{
      deletedId : null
    }
  }
}
</script>