<template>
  <button type="button" class="btn btn-danger d-table my-5 mx-auto" data-bs-toggle="modal" data-bs-target="#Delete">
    Delete
  </button>

  <!-- Modal Form -->
  <div class="modal fade" id="Delete" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form action="">
          <div class="modal-header">
            <h5 class="modal-title">Delete form</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">

              <label>Select<span class="text-danger">*</span></label>
              <br>
              <select v-model="deletedId" >
                <option v-for="{id,name} in data" :key="id" :value="id">{{id}} - {{name}}</option>
              </select>
            </div>
          </div>
          <div class="modal-footer pt-4">
            <button type="button" class="btn btn-danger mx-auto w-100"  v-on:click="$emit('delete', deletedId)">Delete</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Remove",
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