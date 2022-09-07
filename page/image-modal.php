<section id="upload-section">
    <form action="<?php $_SERVER['PHP_SELF']?>" enctype="multipart/form-data" method="POST" id="change-bg-form">
        <p>Drag & Drop file</p>
        <p>OR</p>
        <button id="browse">
            Browse files
        </button>
        <input type="file" name="img-upload" id="img-upload" accept=".jpg,.gif,.jpeg,.png" required>
    </form>
    <p><?php include './extras/logos_and_icons/Vectorarrow up.svg'?></p>
</section>