import {
    FormInputGroup,
    FormInputGroupInput,
    FormInputGroupLabel,
    FormInputGroupLabelShrink,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => {
    return (
        <FormInputGroup>
            <FormInputGroupInput onChange={handleChange} {...props} />
            {label ? (
                <FormInputGroupLabel>{label}</FormInputGroupLabel>
            ) : (
                <FormInputGroupLabelShrink>{label}</FormInputGroupLabelShrink>
            )}
        </FormInputGroup>
    );
};

export default FormInput;
