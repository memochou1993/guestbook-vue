<template>
    <div>
        <b-row>
            <b-col md="3" offset-md="9">
                <b-form-select v-model="per_page" :options="options"/>
            </b-col>
        </b-row>

        <b-table striped hover :fields="fields" :items="data">
            <template slot="action" slot-scope="data">
                <b-button href="" size="sm" variant="danger" @click.prevent="destroy(data.item.id)">刪除</b-button>
            </template>
        </b-table>

        <div class="d-flex justify-content-center">
            <b-pagination v-model="current_page" :limit="limit" :per-page="per_page" :total-rows="total"></b-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    {value: 5, text: 5},
                    {value: 10, text: 10},
                    {value: 15, text: 15}
                ],
                fields: {
                    id: '編號',
                    name: '名字',
                    content: '內容',
                    action: ''
                },
                url: '/api/signatures',
                data: [],
                limit: 5,
                current_page: 1,
                per_page: 5,
                total: 0
            };
        },
        created() {
            this.fetch();
        },
        watch: {
            current_page() {
                this.fetch();
            },
            per_page() {
                this.fetch();
            }
        },
        methods: {
            fetch() {
                this.axios.get(this.url + '?page=' + this.current_page + '&per_page=' + this.per_page)
                    .then(({data}) => {
                        this.data = data.data;
                        this.total = data.meta.total;
                    });
            },
            destroy(id) {
                if (confirm('確定刪除？')) {
                    this.axios.delete(this.url + '/' + id)
                        .then(() => {
                            this.data = this.lodash.remove(this.data, function (data) {
                                return data.id !== id;
                            });
                            this.fetch(this.url + '?page=' + this.current_page);
                        });
                }
            }
        }
    }
</script>
