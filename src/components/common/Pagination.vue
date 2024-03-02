<template>
  <div class="row">
    <div class="col-xxl-12">
        <div class="basic-pagination mt-30">
        <ul class="d-flex align-items-center"> 
            <li class="prev">
                <a href="/courses" class="link-btn link-prev">
                    Prev
                    <i class="arrow_left"></i>
                    <i class="arrow_left"></i>
                </a>
            </li>
            <li>
                <a href="/courses">
                    <span>1</span>
                </a>
            </li>
            <li class="active">
                <a href="/courses">
                    <span>2</span>
                </a>
            </li>
            <li>
                <a href="/courses">
                    <span>3</span>
                </a>
            </li>
            <li class="next">
                <a href="/courses" class="link-btn">
                    Next
                    <i class="arrow_right"></i>
                    <i class="arrow_right"></i>
                </a>
            </li>
        </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'PaginationArea'
}
</script>

