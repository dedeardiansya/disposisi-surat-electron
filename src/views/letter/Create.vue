<template>
  <app-layout>
    <template slot="title">INPUT SURAT</template>
    <div class="container">
      <div class="alert alert-success bg-800" v-if="success">{{ success }}</div>
      <div class="card card-body">
        <p class="lead text-light">Informasi surat.</p>
        <div class="form-group">
          <label>Jenis Surat</label>
          <select
            class="form-control"
            placeholder="Jenis Surat"
            v-model="form.type"
            :class="{ 'is-invalid': error.type }"
          >
            <option value="" selected disabled>Pilih</option>
            <option value="Surat biasa">Surat biasa</option>
            <option value="Laporan">Laporan</option>
            <option value="Undangan">Undangan</option>
          </select>
          <span class="invalid-feedback" v-if="error.type">{{
            error.type
          }}</span>
        </div>

        <div class="form-group">
          <label>Status Surat</label>
          <input
            type="text"
            class="form-control"
            placeholder="Status Surat"
            v-model="form.status"
            :class="{ 'is-invalid': error.status }"
          />
          <span class="invalid-feedback" v-if="error.status">{{
            error.status
          }}</span>
        </div>

        <div class="form-group">
          <label>Deskripsi Surat <small>Optional</small></label>
          <textarea
            class="form-control py-2"
            placeholder="Deskripsi Surat"
            rows="3"
            v-model="form.description"
            :class="{ 'is-invalid': error.description }"
          ></textarea>
          <span class="invalid-feedback" v-if="error.description">{{
            error.description
          }}</span>
        </div>

        <div class="form-group">
          <label>Nama penerima</label>
          <input
            type="text"
            class="form-control"
            placeholder="Nama penerima"
            v-model="form.received_name"
            :class="{ 'is-invalid': error.received_name }"
          />
          <span class="invalid-feedback" v-if="error.received_name">{{
            error.received_name
          }}</span>
        </div>

        <div class="form-group">
          <label>Tujuan surat <small>Optional</small></label>
          <input
            type="text"
            class="form-control"
            placeholder="Tujuan surat"
            v-model="form.accepted_name"
            :class="{ 'is-invalid': error.accepted_name }"
          />
          <span class="invalid-feedback" v-if="error.accepted_name">{{
            error.accepted_name
          }}</span>
        </div>

        <div class="form-group">
          <label>Tanggal masuk</label>
          <input
            type="date"
            class="form-control"
            placeholder="Tanggal masuk"
            v-model="form.received_at"
            :class="{ 'is-invalid': error.received_at }"
          />
          <span class="invalid-feedback" v-if="error.received_at">{{
            error.received_at
          }}</span>
        </div>

        <div class="form-group">
          <label>Tanggal terima <small>Optional</small></label>
          <input
            type="date"
            class="form-control"
            placeholder="Tanggal masuk"
            v-model="form.accepted_at"
            :class="{ 'is-invalid': error.accepted_at }"
          />
          <span class="invalid-feedback" v-if="error.accepted_at">{{
            error.accepted_at
          }}</span>
        </div>
      </div>

      <div class="card card-body">
        <p class="lead text-light">
          Upload gambar.
          <small class="text-secondary">Optional</small>
        </p>
        <el-file-input @file="handleFile" />
        <span class="invalid-feedback d-block" v-if="error.file">{{
          error.file
        }}</span>
      </div>

      <div class="card card-body">
        <div class="alert alert-success" v-if="success">{{ success }}</div>
        <button
          class="btn btn-primary btn-block"
          :class="{ loading }"
          :disabled="loading"
          @click.prevent="submit(form)"
        >
          Simpan
          <span class="spinner"></span>
        </button>
      </div>
    </div>
  </app-layout>
</template>

<script>
import FormData from 'form-data'
import { LetterService } from '@/common/api.service'
import { PUSH_LETTER } from '@/store/mutation.types'
export default {
  data() {
    return {
      loading: false,
      success: '',
      error: {
        type: '',
        status: '',
        description: '',
        received_name: '',
        received_at: '',
        accepted_name: '',
        accepted_at: '',
        file: ''
      },
      form: {
        type: '',
        status: '',
        description: '',
        received_name: '',
        received_at: '',
        accepted_name: '',
        accepted_at: ''
      },
      file: null
    }
  },
  methods: {
    handleFile(file) {
      this.file = file
    },
    async submit(form) {
      this.loading = true
      this.success = ''
      this.error = {
        type: '',
        status: '',
        description: '',
        received_name: '',
        received_at: '',
        accepted_name: '',
        accepted_at: '',
        file: ''
      }

      const formData = new FormData()

      for (const key in form) {
        formData.append(key, form[key])
      }

      if (this.file) {
        formData.append('file', this.file)
      }

      try {
        const { data } = await LetterService.store(formData)
        this.success = 'Data berhasil di simpan.'
        this.$store.commit(PUSH_LETTER, data)
      } catch (e) {
        this.error = {
          ...this.error,
          ...this.$errorResponse(e).errors
        }
      }
      this.loading = false
    }
  }
}
</script>
