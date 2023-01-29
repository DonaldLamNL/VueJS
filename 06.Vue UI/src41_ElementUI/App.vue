<template>
    <div>
        <button>原生按鈕</button>
        <input type="text">
         <el-row>
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>
        <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="Select date and time">
        </el-date-picker>
        <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-info" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
    </div>
</template>

<script>

export default {
    name:'App',
}   
</script>
