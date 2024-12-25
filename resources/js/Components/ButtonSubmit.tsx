import React from "react";
import { Button } from "./ui/button";

function ButtonSubmit({ loading }: { loading: boolean }) {
    return (
        <Button type="submit" disabled={loading}>
            Submit
            {loading && (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </Button>
    );
}

export default ButtonSubmit;
