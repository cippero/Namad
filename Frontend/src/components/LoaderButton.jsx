import React from "react";

export default ({
    isLoading,
    text,
    loadingText,
    // className = "",
    disabled = false,
    ...props
}) =>
    <button>
        disabled = {disabled || isLoading} 
        { ...props} >
        {/* {isLoading && < Glyphicon glyph = "refresh" className = "spinning" / >}  */}
        {!isLoading ? text : loadingText} 
    </button>;