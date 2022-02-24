<template>
  <div class="data-list table-style">
    <div class="cart-header">
        <h2>Admins</h2>
        <nuxt-link to="/admin/create" class="button-action-add">
            <i class="fas fa-plus"></i>
        </nuxt-link>
    </div>
    <table class="table table-borderless">
        <thead>
            <tr>
                <th class="text-center">
                    Id
                </th>
                <th>
                    User Name
                </th>
                <th>
                    Email
                </th>
                <th class="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-center">
                  Id
                </td>
                <td>
                    Name
                </td>
                <td>
                    Email
                </td>
                <td class="text-center">
                    <nuxt-link to="/admin/1" class="button-action btn-edit">
                        <i class="fas fa-pen"></i>
                    </nuxt-link>
                    <nuxt-link to="/admin/1" class="button-action btn-details">
                        <i class="fas fa-eye"></i>
                    </nuxt-link>
                    <nuxt-link to="/admin/1" class="button-action btn-delete">
                        <i class="fas fa-trash"></i>
                    </nuxt-link>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>