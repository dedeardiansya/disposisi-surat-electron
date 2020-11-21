<template>
  <app-layout>
    <template slot="title">DAFTAR SURAT</template>
    <div class="container-fluid">
      <div class="card card-body">
        <input
          type="text"
          v-model="filter"
          placeholder="Cari"
          class="form-control"
        />
      </div>
      <b-table
        responsive="md"
        :items="letters"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :filter="filter"
        :current-page="currentPage"
        :per-page="perPage"
        @filtered="onFiltered"
        bordered
        small
        dark
        hover
        class="m-0"
      >
        <template #cell(actions)="row">
          <button class="btn btn-primary btn-sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Tutup' : 'Detail' }}
          </button>
        </template>

        <template #row-details="row">
          <div class="card card-body m-0">
            <table class="table m-0">
              <tr>
                <td>id</td>
                <td>{{ row.item.id }}</td>
              </tr>
              <tr>
                <td>Jenis</td>
                <td>{{ row.item.type }}</td>
              </tr>
              <tr>
                <td>status</td>
                <td>{{ row.item.status }}</td>
              </tr>
              <tr>
                <td>Deskripsi</td>
                <td>{{ row.item.description }}</td>
              </tr>
              <tr>
                <td>Nama penerima</td>
                <td>{{ row.item.received_name }}</td>
              </tr>
              <tr v-if="row.item.accepted_name">
                <td>Tujuan surat</td>
                <td>{{ row.item.accepted_name }}</td>
              </tr>
              <tr>
                <td>Tanggal masuk</td>
                <td>{{ formatDate(row.item.received_at) }}</td>
              </tr>
              <tr v-if="row.item.accepted_at">
                <td>Tanggal terima</td>
                <td>{{ formatDate(row.item.accepted_at) }}</td>
              </tr>
              <tr>
                <td>Diinput oleh</td>
                <td>{{ row.item.user.name }}</td>
              </tr>
              <tr v-if="row.item.file">
                <td>Gambar</td>
                <td>
                  <button
                    v-b-modal="'model-image-' + row.item.id"
                    class="btn btn-primary btn-sm"
                  >
                    Lihat Gambar
                  </button>
                </td>
              </tr>
            </table>

            <div class="py-2">
              <router-link
                :to="`/letter/edit/${row.item.id}`"
                class="btn mr-2 btn-sm btn-primary"
                >EDIT</router-link
              >
              <button
                @click="handleDelete(row.item.id)"
                class="btn mr-2 btn-sm btn-danger"
              >
                HAPUS
              </button>
            </div>

            <div v-if="row.item.file">
              <b-modal
                :id="'model-image-' + row.item.id"
                size="xl"
                hide-header
                hide-footer
              >
                <img
                  :src="row.item.file"
                  @click="$bvModal.hide('model-image-' + row.item.id)"
                  class="img-fluid w-100 d-block"
                />
              </b-modal>
            </div>
          </div>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="center"
        class="my-3"
      ></b-pagination>
    </div>
  </app-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { LetterService } from '@/common/api.service'
import { DELETE_LETTER } from '@/store/mutation.types'

export default {
  data() {
    return {
      sortBy: 'received_at',
      sortDesc: true,
      filter: '',
      totalRows: 0,
      currentPage: 1,
      perPage: 20,
      fields: [
        { key: 'type', label: 'Jenis', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
        { key: 'accepted_name', label: 'Tujuan surat', sortable: true },
        {
          key: 'received_at',
          label: 'Tanggal Masuk',
          sortable: true,
          formatter: value => {
            const options = {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
            return new Date(value * 1000).toLocaleDateString('id-ID', options)
          }
        },
        { key: 'description', label: 'Deskripsi', sortable: true },
        {
          key: 'actions',
          label: 'Aksi',
          class: 'text-center'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['letters']),
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  methods: {
    formatDate(stamp) {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Date(stamp * 1000).toLocaleDateString('id-ID', options)
    },
    handleDelete(id) {
      const result = confirm('Are you sure to delete?' + id)
      if (result) {
        LetterService.destroy(id)
        this.$store.commit(DELETE_LETTER, id)
      }
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  watch: {
    letters: {
      deep: true,
      immediate: true,
      handler(val) {
        this.totalRows = val.length
      }
    }
  }
}
</script>

<style lang="scss">
.b-table-details > td {
  padding: 0;
}
.b-table-details .card {
  background-color: $gray-900;
}
.pagination {
  .page-item {
    .page-link {
      color: $gray-200;
      background-color: $gray-900;
      border-color: $gray-600;
      margin: 3px;
      width: 30px;
      height: 30px;
      padding: 0;
      box-shadow: none !important;
      line-height: 28px;
      text-align: center;
    }

    &.disabled {
      .page-link {
        color: $gray-500;
        background-color: $gray-800;
        border-color: $gray-700;
      }
    }
  }
}
</style>
