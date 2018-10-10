<template>
    <div>
        <b-form class="mb-3" @submit="onSubmit" @reset="onReset">
            <b-form-group
                label="名字"
                label-for="name"
                description="">
                <b-form-input
                    id="name"
                    type="text"
                    v-model="signature.name"
                    :class="{
                        'is-valid': nameIsValid,
                        'is-invalid': nameIsInvalid
                    }"
                    required>
                </b-form-input>
                <span class="invalid-feedback" v-if="nameIsInvalid">
                    {{ errors.name[0] }}
                </span>
            </b-form-group>
            
            <b-form-group
                label="信箱"
                label-for="email"
                description="">
                <b-form-input
                    id="email"
                    type="email"
                    v-model="signature.email"
                    :class="{
                        'is-valid': emailIsValid,
                        'is-invalid': emailIsInvalid
                    }"
                    required>
                </b-form-input>
                <span class="invalid-feedback" v-if="emailIsInvalid">
                    {{ errors.email[0] }}
                </span>
            </b-form-group>

            <b-form-group
                label="內容"
                label-for="content"
                description="">
                <b-form-textarea
                    id="content"
                    v-model="signature.content"
                    :class="{
                        'is-valid': contentIsValid,
                        'is-invalid': contentIsInvalid
                    }"
                    :rows="3"
                    :max-rows="6"
                    required>
                </b-form-textarea>
                <span class="invalid-feedback" v-if="contentIsInvalid">
                    {{ errors.content[0] }}
                </span>
            </b-form-group>
            
            <b-button type="submit" variant="primary">送出</b-button>&nbsp;
            <b-button type="reset" variant="danger">重設</b-button>
        </b-form>

        <b-alert show dismissible fade v-if="saved">
            表單已送出！
        </b-alert>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: '/api/signatures',
                signature: {
                    name: '',
                    email: '',
                    content: ''
                },
                validation: {
                    name: /^[a-zA-Z0-9\u4e00-\u9fa5]{3,30}$/,
                    email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/,
                    content: /^.{3,30}$/
                },
                saved: false,
                errors: []
            };
        },
        computed: {
            nameIsValid: function() {
                return this.validation.name.test(this.signature.name.trim());
            },
            nameIsInvalid: function() {
                return (!this.validation.name.test(this.signature.name.trim()) && this.errors.name);
            },
            emailIsValid: function() {
                return this.validation.email.test(this.signature.email.trim());
            },
            emailIsInvalid: function() {
                return (!this.validation.email.test(this.signature.email.trim()) && this.errors.email);
            },
            contentIsValid: function() {
                return this.validation.content.test(this.signature.content.trim());
            },
            contentIsInvalid: function() {
                return (!this.validation.content.test(this.signature.content.trim()) && this.errors.content);
            }
        },
        methods: {
            onSubmit() {
                this.saved = false;
                this.axios.post(this.url, this.signature)
                    .then(({data}) => {
                        this.success()
                    })
                    .catch(({response}) => {
                        this.error(response.data)
                    });
            },
            success() {
                this.saved = true;
                this.onReset();
            },
            error(data) {
                this.errors = data;
            },
            onReset() {
                this.errors = [];
                this.signature = {
                    name: '',
                    email: '',
                    content: ''
                };
            }
        }
    }
</script>
